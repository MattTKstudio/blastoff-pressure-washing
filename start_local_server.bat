@echo off
setlocal

REM Set the working directory to your project folder
cd /d "C:\Users\matth\OneDrive\Empyrean\2 Purgatorio\4. Sloth\BPW\BPW Website"

REM Check if Python is installed
python --version >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    echo ERROR: Python is not installed or not added to PATH.
    echo Please install Python from https://www.python.org/ and ensure it is added to your system PATH.
    pause
    exit /b
)

echo Starting local server at http://localhost:8000
start http://localhost:8000
python -m http.server 8000

echo Server stopped.
pause
endlocal