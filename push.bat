@echo off
echo ========================================
echo       GitHub Auto-Push Script
echo ========================================

:: Add all changes
echo.
echo [1/3] Adding changes...
git add .

:: Prompt for a commit message
echo.
set /p msg="[2/3] Enter commit message (or press Enter to use 'Auto-update'): "

:: If user pressed enter without typing anything, use a default message
if "%msg%"=="" set msg=Auto-update

:: Commit the changes
git commit -m "%msg%"

:: Push to the current branch
echo.
echo [3/3] Pushing to GitHub...
git push

echo.
echo ========================================
echo        Push Complete!
echo ========================================
pause
