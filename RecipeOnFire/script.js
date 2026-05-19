// ============================================================
// script.js — RecipesOnFire Homepage JavaScript
// ============================================================

// ---- Auth: Show/hide login vs user menu in navbar ----
function updateNavbar() {
    var user = localStorage.getItem("rof_user");
    var loginBtn  = document.getElementById("navLoginBtn");
    var signupBtn = document.getElementById("navSignupBtn");
    var userMenu  = document.getElementById("navUserMenu");
    var navUsername = document.getElementById("navUsername");

    if (user) {
        if (loginBtn)  loginBtn.style.display  = "none";
        if (signupBtn) signupBtn.style.display = "none";
        if (userMenu)  userMenu.classList.remove("d-none");
        if (navUsername) navUsername.textContent = user;
    }
}

// ---- Show toast notification ----
function showToast(message, type) {
    var toast = document.getElementById("toastNotif");
    var msg   = document.getElementById("toastMsg");
    if (!toast) return;
    msg.textContent = message;
    toast.className = "toast-notif show " + (type || "");
    setTimeout(function() { toast.className = "toast-notif"; }, 3000);
}

// ---- Get user's saved favourites from localStorage ----
function getFavourites() {
    var saved = localStorage.getItem("rof_favourites");
    return saved ? JSON.parse(saved) : [];
}

// ---- Load favourites from server into localStorage (when logged in) ----
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

// ---- Toggle favourite (localStorage-based for homepage) ----
function toggleFavourite(event, recipeId) {
    event.stopPropagation(); // don't open modal

    var user = localStorage.getItem("rof_user");
    if (!user) {
        showToast("Please log in to save favourites!", "orange");
        window.location.href = "login.html";
        return;
    }

    var favs = getFavourites();
    var idx  = favs.indexOf(recipeId);
    var btn  = event.currentTarget;

    if (idx === -1) {
        favs.push(recipeId);
        btn.classList.add("active");
        showToast("Added to favourites ❤️", "green");
    } else {
        favs.splice(idx, 1);
        btn.classList.remove("active");
        showToast("Removed from favourites", "");
    }

    localStorage.setItem("rof_favourites", JSON.stringify(favs));

    // Also sync with PHP backend if user is logged in
    fetch("php/toggle_favourite.php", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "recipe_id=" + recipeId
    }).catch(function() {});
}

// ---- Render a single recipe card ----
function renderCard(recipe, isFeatured) {
    var favs    = getFavourites();
    var isFav   = favs.indexOf(recipe.id) !== -1;
    var diffBadge = "badge-easy";
    if (recipe.difficulty === "Medium") diffBadge = "badge-medium";
    if (recipe.difficulty === "Hard")   diffBadge = "badge-hard";

    return `
        <div class="col-12 col-sm-6 col-lg-4 mb-4">
            <div class="card recipe-card h-100 border-0 shadow-sm" onclick="openModal(${recipe.id})">
                <div class="card-img-wrapper">
                    <img src="${recipe.image}" class="card-img-top" alt="${recipe.name}"
                         onerror="this.style.background='#f0f0f0';this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'210\'%3E%3Crect fill=\'%23f0f0f0\' width=\'400\' height=\'210\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' fill=\'%23aaa\' font-size=\'18\' dominant-baseline=\'middle\' text-anchor=\'middle\'%3EImage unavailable%3C/text%3E%3C/svg%3E'">
                    <button
                        class="btn-heart position-absolute top-0 end-0 m-2 ${isFav ? 'active' : ''}"
                        onclick="toggleFavourite(event, ${recipe.id})"
                        title="${isFav ? 'Remove from Favourites' : 'Add to Favourites'}"
                    >
                        <i class="bi ${isFav ? 'bi-heart-fill' : 'bi-heart'}"></i>
                    </button>
                </div>
                <div class="card-body">
                    <div class="d-flex gap-2 mb-2">
                        <span class="badge badge-category">${recipe.category}</span>
                        <span class="badge text-white ${diffBadge}" style="font-size:0.72rem;">${recipe.difficulty}</span>
                    </div>
                    <h5 class="card-title">${recipe.name}</h5>
                    <div class="recipe-meta mb-2">
                        <span><i class="bi bi-clock"></i> ${recipe.time}</span>
                        <span><i class="bi bi-list-ul"></i> ${recipe.ingredients.length} ingredients</span>
                    </div>
                    <p class="card-text">${recipe.description}</p>
                </div>
                <div class="card-footer bg-transparent border-0 pb-3 px-3">
                    <button class="btn btn-custom btn-sm w-100" onclick="openModal(${recipe.id}); event.stopPropagation();">
                        <i class="bi bi-eye me-1"></i>View Recipe
                    </button>
                </div>
            </div>
        </div>`;
}

// ---- Open Recipe Modal ----
var currentModalRecipeId = null;

function openModal(recipeId) {
    // Find recipe by id
    var recipe = null;
    for (var i = 0; i < recipes.length; i++) {
        if (recipes[i].id === recipeId) { recipe = recipes[i]; break; }
    }
    if (!recipe) return;

    currentModalRecipeId = recipe.id;

    // Populate modal fields
    document.getElementById("recipeModalLabel").textContent  = recipe.name;
    document.getElementById("modalImg").src                  = recipe.image;
    document.getElementById("modalImg").alt                  = recipe.name;
    document.getElementById("modalCategory").textContent     = recipe.category;
    document.getElementById("modalTime").textContent         = recipe.time;
    document.getElementById("modalDifficulty").textContent   = recipe.difficulty;
    document.getElementById("modalDescription").textContent  = recipe.description;

    // Ingredients
    var ingList = document.getElementById("modalIngredients");
    ingList.innerHTML = "";
    recipe.ingredients.forEach(function(ing) {
        var li = document.createElement("li");
        li.textContent = ing;
        ingList.appendChild(li);
    });

    // Steps
    var stepList = document.getElementById("modalSteps");
    stepList.innerHTML = "";
    recipe.steps.forEach(function(step) {
        var li = document.createElement("li");
        li.textContent = step;
        stepList.appendChild(li);
    });

    // Favourite button in modal
    var modalFavBtn = document.getElementById("modalFavBtn");
    var favs = getFavourites();
    if (favs.indexOf(recipe.id) !== -1) {
        modalFavBtn.innerHTML = '<i class="bi bi-heart-fill me-1"></i>Saved to Favourites';
        modalFavBtn.classList.add("btn-danger");
        modalFavBtn.classList.remove("btn-outline-danger");
    } else {
        modalFavBtn.innerHTML = '<i class="bi bi-heart me-1"></i>Save to Favourites';
        modalFavBtn.classList.remove("btn-danger");
        modalFavBtn.classList.add("btn-outline-danger");
    }

    // Show Bootstrap modal
    var modal = new bootstrap.Modal(document.getElementById("recipeModal"));
    modal.show();
}

// Modal favourite button click
document.addEventListener("DOMContentLoaded", function() {
    var modalFavBtn = document.getElementById("modalFavBtn");
    if (modalFavBtn) {
        modalFavBtn.addEventListener("click", function() {
            if (!currentModalRecipeId) return;

            var user = localStorage.getItem("rof_user");
            if (!user) {
                showToast("Please log in to save favourites!", "orange");
                return;
            }

            var favs = getFavourites();
            var idx  = favs.indexOf(currentModalRecipeId);

            if (idx === -1) {
                favs.push(currentModalRecipeId);
                modalFavBtn.innerHTML = '<i class="bi bi-heart-fill me-1"></i>Saved to Favourites';
                modalFavBtn.classList.add("btn-danger");
                modalFavBtn.classList.remove("btn-outline-danger");
                showToast("Added to favourites ❤️", "green");
            } else {
                favs.splice(idx, 1);
                modalFavBtn.innerHTML = '<i class="bi bi-heart me-1"></i>Save to Favourites';
                modalFavBtn.classList.remove("btn-danger");
                modalFavBtn.classList.add("btn-outline-danger");
                showToast("Removed from favourites", "");
            }

            localStorage.setItem("rof_favourites", JSON.stringify(favs));

            // Refresh heart buttons on page
            refreshHeartButtons();

            // Sync with backend
            fetch("php/toggle_favourite.php", {
                method: "POST",
                credentials: "same-origin",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: "recipe_id=" + currentModalRecipeId
            }).catch(function() {});
        });
    }

    function initPage() {
        // Render Featured Cards (first 6)
        var container = document.getElementById("featuredContainer");
        if (container) {
            container.innerHTML = "";
            var featured = recipes.slice(0, 6);
            featured.forEach(function(recipe) {
                container.innerHTML += renderCard(recipe, true);
            });
        }
        updateNavbar();
    }

    loadFavouritesFromServer(initPage);

    // Navbar search - redirect to recipes page with query
    var navForm = document.getElementById("navSearchForm");
    if (navForm) {
        navForm.addEventListener("submit", function(e) {
            e.preventDefault();
            var q = document.getElementById("navSearchInput").value.trim();
            if (q) window.location.href = "recipes.html?search=" + encodeURIComponent(q);
        });
    }

    // Scroll to top button
    var scrollBtn = document.getElementById("scrollTopBtn");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 400) { scrollBtn.classList.add("show"); }
        else { scrollBtn.classList.remove("show"); }
    });
    if (scrollBtn) {
        scrollBtn.addEventListener("click", function() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});

// ---- Refresh all heart icons on page ----
function refreshHeartButtons() {
    var favs = getFavourites();
    var btns = document.querySelectorAll(".btn-heart");
    btns.forEach(function(btn) {
        // Extract recipe id from onclick attribute
        var onclick = btn.getAttribute("onclick") || "";
        var match   = onclick.match(/\d+/);
        if (match) {
            var rid = parseInt(match[0]);
            if (favs.indexOf(rid) !== -1) {
                btn.classList.add("active");
                btn.querySelector("i").className = "bi bi-heart-fill";
            } else {
                btn.classList.remove("active");
                btn.querySelector("i").className = "bi bi-heart";
            }
        }
    });
}
