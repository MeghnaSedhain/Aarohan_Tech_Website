@echo off
set "NODE_EXE=C:\Users\HomeUser\AppData\Local\ms-playwright-go\1.57.0\node.exe"
if not exist "%NODE_EXE%" (
    where node >nul 2>nul
    if %errorlevel% equ 0 (
        node start.js
        goto :eof
    )
    echo [ERROR] Node.js executable not found.
    pause
    goto :eof
)

"%NODE_EXE%" start.js
pause
