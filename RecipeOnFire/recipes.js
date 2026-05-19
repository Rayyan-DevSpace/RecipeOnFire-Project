// ============================================================
// recipes.js — RecipesOnFire Recipes Page JavaScript
// ============================================================

var currentFilter   = "All";
var currentModalId  = null;  // can be a recipe object id (number) or string for API meals

// ---- Helpers shared with script.js ----
function getFavourites() {
    var saved = localStorage.getItem("rof_favourites");
    return saved ? JSON.parse(saved) : [];
}

function loadFavouritesFromServer(callback) {
    if (!localStorage.getItem("rof_user")) {
        if (callback) callback();
        return;
    }
    fetch("php/get_favourites.php", { credentials: "same-origin" })
        .then(function(res) { return res.json(); })
        .then(function(data) {
            if (data.success && Array.isArray(data.favourites)) {
                localStorage.setItem("rof_favourites", JSON.stringify(data.favourites));
            }
            if (callback) callback();
        })
        .catch(function() { if (callback) callback(); });
}

function showToast(message, type) {
    var toast = document.getElementById("toastNotif");
    var msg   = document.getElementById("toastMsg");
    if (!toast) return;
    msg.textContent = message;
    toast.className = "toast-notif show " + (type || "");
    setTimeout(function() { toast.className = "toast-notif"; }, 3000);
}

function updateNavbar() {
    var user     = localStorage.getItem("rof_user");
    var loginBtn = document.getElementById("navLoginBtn");
    var signupBtn= document.getElementById("navSignupBtn");
    var userMenu = document.getElementById("navUserMenu");
    var navUname = document.getElementById("navUsername");
    if (user) {
        if (loginBtn)  loginBtn.style.display  = "none";
        if (signupBtn) signupBtn.style.display = "none";
        if (userMenu)  userMenu.classList.remove("d-none");
        if (navUname)  navUname.textContent = user;
    }
}

// ---- Build difficulty badge class ----
function diffClass(diff) {
    if (diff === "Medium") return "badge-medium";
    if (diff === "Hard")   return "badge-hard";
    return "badge-easy";
}

// ---- Render a local recipe card ----
function makeCard(recipe) {
    var favs  = getFavourites();
    var isFav = favs.indexOf(recipe.id) !== -1;
    return `
        <div class="col-12 col-sm-6 col-lg-4 mb-2 recipe-col"
             data-category="${recipe.category}" data-name="${recipe.name.toLowerCase()}">
            <div class="card recipe-card h-100 border-0 shadow-sm" onclick="openLocalModal(${recipe.id})">
                <div class="card-img-wrapper">
                    <img src="${recipe.image}" class="card-img-top" alt="${recipe.name}"
                         onerror="this.style.background='#f0f0f0'; this.style.objectFit='contain'; this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'210\'%3E%3Crect fill=\'%23f0f0f0\' width=\'400\' height=\'210\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' fill=\'%23aaa\' font-size=\'18\' dominant-baseline=\'middle\' text-anchor=\'middle\'%3EImage unavailable%3C/text%3E%3C/svg%3E'">
                    <button class="btn-heart position-absolute top-0 end-0 m-2 ${isFav ? 'active' : ''}"
                            onclick="toggleFav(event, ${recipe.id})"
                            title="${isFav ? 'Remove' : 'Add to'} Favourites">
                        <i class="bi ${isFav ? 'bi-heart-fill' : 'bi-heart'}"></i>
                    </button>
                </div>
                <div class="card-body">
                    <div class="d-flex gap-2 mb-2">
                        <span class="badge badge-category">${recipe.category}</span>
                        <span class="badge text-white ${diffClass(recipe.difficulty)}" style="font-size:0.72rem;">${recipe.difficulty}</span>
                    </div>
                    <h5 class="card-title">${recipe.name}</h5>
                    <div class="recipe-meta mb-2">
                        <span><i class="bi bi-clock"></i> ${recipe.time}</span>
                        <span><i class="bi bi-list-ul"></i> ${recipe.ingredients.length} ingredients</span>
                    </div>
                    <p class="card-text">${recipe.description}</p>
                </div>
                <div class="card-footer bg-transparent border-0 pb-3 px-3">
                    <button class="btn btn-custom btn-sm w-100"
                            onclick="openLocalModal(${recipe.id}); event.stopPropagation();">
                        <i class="bi bi-eye me-1"></i>View Full Recipe
                    </button>
                </div>
            </div>
        </div>`;
}

// ---- Render an API recipe card (TheMealDB format) ----
function makeApiCard(meal) {
    return `
        <div class="col-12 col-sm-6 col-lg-4 mb-2">
            <div class="card recipe-card h-100 border-0 shadow-sm" style="border-top: 3px solid var(--orange);">
                <div class="card-img-wrapper">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
                    <span class="position-absolute top-0 start-0 m-2 badge bg-dark bg-opacity-75 text-white" style="font-size:0.7rem;">
                        🌐 API Result
                    </span>
                </div>
                <div class="card-body">
                    <span class="badge badge-category mb-2">${meal.strCategory || meal.strArea || "World"}</span>
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text text-muted" style="font-size:0.85rem;">
                        ${(meal.strInstructions || "").substring(0, 100)}...
                    </p>
                </div>
                <div class="card-footer bg-transparent border-0 pb-3 px-3">
                    <button class="btn btn-custom btn-sm w-100" onclick="openApiModal('${meal.idMeal}')">
                        <i class="bi bi-eye me-1"></i>View Full Recipe
                    </button>
                </div>
            </div>
        </div>`;
}

// ---- Render all local recipes ----
function renderRecipes(list) {
    var container = document.getElementById("recipesContainer");
    container.innerHTML = "";
    if (list.length === 0) {
        document.getElementById("emptyState").style.display = "block";
        document.getElementById("resultsInfo").textContent  = "No recipes found";
        return;
    }
    document.getElementById("emptyState").style.display = "none";
    document.getElementById("resultsInfo").textContent  = "Showing " + list.length + " recipe" + (list.length !== 1 ? "s" : "");
    list.forEach(function(r) { container.innerHTML += makeCard(r); });
}

// ---- Get filtered + sorted list ----
function getFilteredList() {
    var searchVal = document.getElementById("recipeSearchInput").value.toLowerCase().trim();
    var sortVal   = document.getElementById("sortSelect").value;

    var filtered = recipes.filter(function(r) {
        var matchFilter = (currentFilter === "All") || (r.category === currentFilter);
        var matchSearch = !searchVal ||
            r.name.toLowerCase().includes(searchVal) ||
            r.category.toLowerCase().includes(searchVal) ||
            r.description.toLowerCase().includes(searchVal);
        return matchFilter && matchSearch;
    });

    // Sort
    if (sortVal === "name") {
        filtered.sort(function(a, b) { return a.name.localeCompare(b.name); });
    } else if (sortVal === "time") {
        filtered.sort(function(a, b) { return parseInt(a.time) - parseInt(b.time); });
    } else if (sortVal === "difficulty") {
        var order = { "Easy": 0, "Medium": 1, "Hard": 2 };
        filtered.sort(function(a, b) { return order[a.difficulty] - order[b.difficulty]; });
    }

    return filtered;
}

// ---- Clear search ----
function clearSearch() {
    document.getElementById("recipeSearchInput").value = "";
    document.getElementById("clearSearchBtn").style.display = "none";
    document.getElementById("apiResultsSection").style.display = "none";
    currentFilter = "All";
    document.querySelectorAll(".filter-btn").forEach(function(btn) {
        btn.classList.remove("active");
        if (btn.getAttribute("data-filter") === "All") btn.classList.add("active");
    });
    renderRecipes(getFilteredList());
}

// ---- TheMealDB API Search ----
function searchAPI(query) {
    var apiSection   = document.getElementById("apiResultsSection");
    var apiContainer = document.getElementById("apiResultsContainer");
    apiContainer.innerHTML = '<div class="col-12 text-center py-4"><div class="spinner-border" style="color:var(--orange);" role="status"><span class="visually-hidden">Loading...</span></div></div>';
    apiSection.style.display = "block";

    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + encodeURIComponent(query))
        .then(function(res) { return res.json(); })
        .then(function(data) {
            apiContainer.innerHTML = "";
            if (!data.meals) {
                apiContainer.innerHTML = '<div class="col-12 text-center text-muted py-3">No API results found for "' + query + '"</div>';
                return;
            }
            data.meals.slice(0, 6).forEach(function(meal) {
                apiContainer.innerHTML += makeApiCard(meal);
            });
        })
        .catch(function() {
            apiContainer.innerHTML = '<div class="col-12 text-center text-muted py-3">Could not reach the API. Check your internet connection.</div>';
        });
}

// ---- Open Modal for local recipe ----
function openLocalModal(recipeId) {
    var recipe = null;
    for (var i = 0; i < recipes.length; i++) {
        if (recipes[i].id === recipeId) { recipe = recipes[i]; break; }
    }
    if (!recipe) return;

    currentModalId = recipe.id;

    // Populate modal
    document.getElementById("recipeModalLabel").textContent = recipe.name;
    document.getElementById("modalImg").src                 = recipe.image;
    document.getElementById("modalImg").alt                 = recipe.name;
    document.getElementById("modalCategory").textContent    = recipe.category;
    document.getElementById("modalTime").textContent        = recipe.time;
    document.getElementById("modalDifficulty").textContent  = recipe.difficulty;
    document.getElementById("modalDescription").textContent = recipe.description;

    var ingList = document.getElementById("modalIngredients");
    ingList.innerHTML = "";
    recipe.ingredients.forEach(function(ing) {
        var li = document.createElement("li");
        li.textContent = ing;
        ingList.appendChild(li);
    });

    var stepList = document.getElementById("modalSteps");
    stepList.innerHTML = "";
    recipe.steps.forEach(function(step) {
        var li = document.createElement("li");
        li.textContent = step;
        stepList.appendChild(li);
    });

    // Fav button state
    updateModalFavBtn();

    // Show modal
    var modal = new bootstrap.Modal(document.getElementById("recipeModal"));
    modal.show();
}

// ---- Open Modal for API meal ----
function openApiModal(mealId) {
    currentModalId = "api_" + mealId;

    // Show loading state in modal
    document.getElementById("recipeModalLabel").textContent = "Loading...";
    document.getElementById("modalImg").src                 = "";
    document.getElementById("modalCategory").textContent    = "";
    document.getElementById("modalTime").textContent        = "Varies";
    document.getElementById("modalDifficulty").textContent  = "";
    document.getElementById("modalDescription").textContent = "Fetching recipe details...";
    document.getElementById("modalIngredients").innerHTML   = "";
    document.getElementById("modalSteps").innerHTML         = "";

    var modal = new bootstrap.Modal(document.getElementById("recipeModal"));
    modal.show();

    fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealId)
        .then(function(res) { return res.json(); })
        .then(function(data) {
            if (!data.meals || !data.meals[0]) return;
            var meal = data.meals[0];

            document.getElementById("recipeModalLabel").textContent = meal.strMeal;
            document.getElementById("modalImg").src                 = meal.strMealThumb;
            document.getElementById("modalCategory").textContent    = meal.strCategory + " • " + meal.strArea;
            document.getElementById("modalDescription").textContent = (meal.strInstructions || "").substring(0, 300) + "...";

            // Build ingredients list from API format
            var ingList = document.getElementById("modalIngredients");
            ingList.innerHTML = "";
            for (var i = 1; i <= 20; i++) {
                var ing     = meal["strIngredient" + i];
                var measure = meal["strMeasure" + i];
                if (ing && ing.trim()) {
                    var li = document.createElement("li");
                    li.textContent = (measure ? measure.trim() + " " : "") + ing.trim();
                    ingList.appendChild(li);
                }
            }

            // Instructions as steps (split by newline)
            var stepList = document.getElementById("modalSteps");
            stepList.innerHTML = "";
            var lines = (meal.strInstructions || "").split("\n").filter(function(l) { return l.trim().length > 10; });
            lines.forEach(function(line) {
                var li = document.createElement("li");
                li.textContent = line.trim();
                stepList.appendChild(li);
            });

            // Hide fav button for API results
            document.getElementById("modalFavBtn").style.display = "none";
        })
        .catch(function() {
            document.getElementById("modalDescription").textContent = "Failed to load recipe details.";
        });
}

// ---- Update modal fav button ----
function updateModalFavBtn() {
    var btn  = document.getElementById("modalFavBtn");
    if (!btn) return;
    btn.style.display = "";

    if (typeof currentModalId === "string" && currentModalId.startsWith("api_")) {
        btn.style.display = "none";
        return;
    }

    var favs  = getFavourites();
    var isFav = favs.indexOf(currentModalId) !== -1;
    if (isFav) {
        btn.innerHTML = '<i class="bi bi-heart-fill me-1"></i>Saved to Favourites';
        btn.className = "btn btn-danger btn-sm";
    } else {
        btn.innerHTML = '<i class="bi bi-heart me-1"></i>Save to Favourites';
        btn.className = "btn btn-outline-danger btn-sm";
    }
}

// ---- Toggle favourite ----
function toggleFav(event, recipeId) {
    event.stopPropagation();
    var user = localStorage.getItem("rof_user");
    if (!user) {
        showToast("Please log in to save favourites!", "orange");
        setTimeout(function() { window.location.href = "login.html"; }, 1500);
        return;
    }

    var favs = getFavourites();
    var idx  = favs.indexOf(recipeId);
    var btn  = event.currentTarget;

    if (idx === -1) {
        favs.push(recipeId);
        btn.classList.add("active");
        btn.querySelector("i").className = "bi bi-heart-fill";
        showToast("Added to favourites ❤️", "green");
    } else {
        favs.splice(idx, 1);
        btn.classList.remove("active");
        btn.querySelector("i").className = "bi bi-heart";
        showToast("Removed from favourites", "");
    }
    localStorage.setItem("rof_favourites", JSON.stringify(favs));

    // Sync with backend
    fetch("php/toggle_favourite.php", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "recipe_id=" + recipeId
    }).catch(function() {});
}

// ============================================================
// DOMContentLoaded — Setup everything
// ============================================================
document.addEventListener("DOMContentLoaded", function() {

    updateNavbar();

    function initRecipesPage() {
        renderRecipes(getFilteredList());

        var urlSearch = new URLSearchParams(window.location.search).get("search");
        if (urlSearch) {
            document.getElementById("recipeSearchInput").value = urlSearch;
            renderRecipes(getFilteredList());
            searchAPI(urlSearch);
            document.getElementById("clearSearchBtn").style.display = "inline-block";
        }
    }

    loadFavouritesFromServer(initRecipesPage);

    // ---- Search button ----
    document.getElementById("searchBtn").addEventListener("click", function() {
        var query = document.getElementById("recipeSearchInput").value.trim();
        renderRecipes(getFilteredList());

        if (query.length > 1) {
            document.getElementById("clearSearchBtn").style.display = "inline-block";
            searchAPI(query); // fetch from API
        } else {
            document.getElementById("apiResultsSection").style.display = "none";
            document.getElementById("clearSearchBtn").style.display    = "none";
        }
    });

    // Search on Enter key
    document.getElementById("recipeSearchInput").addEventListener("keydown", function(e) {
        if (e.key === "Enter") { document.getElementById("searchBtn").click(); }
    });

    // Clear button
    document.getElementById("clearSearchBtn").addEventListener("click", clearSearch);

    // ---- Filter buttons ----
    document.querySelectorAll(".filter-btn").forEach(function(btn) {
        btn.addEventListener("click", function() {
            currentFilter = this.getAttribute("data-filter");
            document.querySelectorAll(".filter-btn").forEach(function(b) { b.classList.remove("active"); });
            this.classList.add("active");

            // Clear search when filtering
            document.getElementById("recipeSearchInput").value = "";
            document.getElementById("apiResultsSection").style.display = "none";
            document.getElementById("clearSearchBtn").style.display    = "none";

            renderRecipes(getFilteredList());
        });
    });

    // ---- Sort select ----
    document.getElementById("sortSelect").addEventListener("change", function() {
        renderRecipes(getFilteredList());
    });

    // ---- Modal fav button ----
    var modalFavBtn = document.getElementById("modalFavBtn");
    if (modalFavBtn) {
        modalFavBtn.addEventListener("click", function() {
            var user = localStorage.getItem("rof_user");
            if (!user) {
                showToast("Please log in to save favourites!", "orange");
                return;
            }
            if (!currentModalId || String(currentModalId).startsWith("api_")) return;

            var favs = getFavourites();
            var idx  = favs.indexOf(currentModalId);
            if (idx === -1) {
                favs.push(currentModalId);
                showToast("Added to favourites ❤️", "green");
            } else {
                favs.splice(idx, 1);
                showToast("Removed from favourites", "");
            }
            localStorage.setItem("rof_favourites", JSON.stringify(favs));
            updateModalFavBtn();

            // Sync with backend
            fetch("php/toggle_favourite.php", {
                method: "POST",
                credentials: "same-origin",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: "recipe_id=" + currentModalId
            }).catch(function() {});

            // Re-render cards to update heart icons
            renderRecipes(getFilteredList());
        });
    }

    // ---- Scroll to top ----
    var scrollBtn = document.getElementById("scrollTopBtn");
    window.addEventListener("scroll", function() {
        if (scrollBtn) {
            if (window.scrollY > 400) scrollBtn.classList.add("show");
            else scrollBtn.classList.remove("show");
        }
    });
    if (scrollBtn) {
        scrollBtn.addEventListener("click", function() { window.scrollTo({ top: 0, behavior: "smooth" }); });
    }
});
