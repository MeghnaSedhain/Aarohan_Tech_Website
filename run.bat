@echo off
where node >nul 2>nul
if %errorlevel% equ 0 (
    node start.js
    goto :eof
)
set "NODE_EXE=C:\Users\HomeUser\AppData\Local\ms-playwright-go\1.57.0\node.exe"
if exist "%NODE_EXE%" (
    "%NODE_EXE%" start.js
    goto :eof
)
echo [ERROR] Node.js executable not found.
pause
