Write-Host "Please enter the name of the commit"
$commit_name = Read-Host "Waiting for user's input"
Write-Host "The name of the commit $($commit_name)"
Read-Host "Press any key to continue"

git add .
git commit -am "$($commit_name)"
git status