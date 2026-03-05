@echo off
:loop
git add .
git commit -m "auto update"
git push
timeout /t 2 >nul
goto loop