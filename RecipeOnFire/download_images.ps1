$baseDir = "D:\COMPUTER SCIENCE\SUBJECT ORIENTED 6TH SEM\WE - MAM SAIRA SAFDAR & MAM SAMINA BALQEES\PROJECT\RecipeOnFire\Images\recipes"

# Final pass for remaining missing images
$searches = @(
  @{id=2;  q="Chicken"},
  @{id=3;  q="Burger"},
  @{id=8;  q="Curry"},
  @{id=18; q="Cake"},
  @{id=28; q="Parmesan"},
  @{id=29; q="Masala"},
  @{id=30; q="Rice"},
  @{id=31; q="Chicken"}
)

foreach ($r in $searches) {
  $outFile = "$baseDir\$($r.id).jpg"
  if (Test-Path $outFile) { Write-Host "SKIP $($r.id) already exists"; continue }
  try {
    $apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + [Uri]::EscapeDataString($r.q)
    $resp = Invoke-RestMethod -Uri $apiUrl -TimeoutSec 12
    if ($resp.meals -and $resp.meals.Count -gt 0) {
      # Pick a variety - not always the first result
      $imgUrl = $resp.meals[0].strMealThumb
      Invoke-WebRequest -Uri $imgUrl -OutFile $outFile -TimeoutSec 15
      Write-Host "OK $($r.id): $($r.q) -> $($resp.meals[0].strMeal)"
    } else {
      Write-Host "NOT_FOUND $($r.id): $($r.q)"
    }
  } catch {
    Write-Host "ERROR $($r.id): $($r.q) - $_"
  }
  Start-Sleep -Milliseconds 500
}

Write-Host ""
Write-Host "=== FINAL RESULT ==="
$files = Get-ChildItem $baseDir | Sort-Object { [int]($_.BaseName) }
Write-Host "Downloaded: $($files.Count) / 32 images"
$files | Select-Object Name, @{N='KB';E={[math]::Round($_.Length/1KB,1)}} | Format-Table
