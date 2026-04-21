$ErrorActionPreference = 'SilentlyContinue'

$projectRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$ports = 4321..4325
$portProcesses = Get-NetTCPConnection -LocalPort $ports -State Listen |
	Select-Object -ExpandProperty OwningProcess -Unique

foreach ($processId in $portProcesses) {
	Stop-Process -Id $processId -Force
}

$devProcesses = Get-CimInstance Win32_Process |
	Where-Object {
		($_.CommandLine -like '*astro dev*' -or $_.CommandLine -like '*npm*run*dev*') -and
		$_.CommandLine -like '*portfolio*'
	}

foreach ($process in $devProcesses) {
	Stop-Process -Id $process.ProcessId -Force
}

Start-Sleep -Milliseconds 350
Set-Location $projectRoot
npm run dev -- --host 127.0.0.1
