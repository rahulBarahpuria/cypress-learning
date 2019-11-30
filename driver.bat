@echo off
echo Total dockers = %n%
for /f %%A in ('dir "C:\rahul\cypressautomation\mpnautomatione2e\cypress\integration"^| find "File(s)"') do set cnt=%%A
echo Total Spec Files = %cnt%
set /A spec_per_docker=%cnt%/%n%
echo Spec per docker = %spec_per_docker%
set /A exp_cnt = %n%*%spec_per_docker%
set /A remaining_specs = %cnt%-%exp_cnt%
REM docker image is built only one time and docker run by passing args
docker build -t mpn_automation_docker:0.1 .
SET i=1
SET index=1
:while
 echo The value of index is %index%
 SET /A endIndex=%index%+%spec_per_docker%-1
 echo End Index set to %endIndex%
 echo Starting Docker container
 docker run --ipc=host --name=mpn_auto_container_%i% -d mpn_automation_docker:0.1 %index% %endIndex%
 echo Container %i% Started
 SET /A index = %endIndex%+1"
 SET /A i=%i%+1
 if %index% leq %exp_cnt%  goto :while

set /A nxt_indx = %endIndex%+1
if %remaining_specs% gtr 0 (
	docker run  --name=mpn_auto_container_%i% -d mpn_automation_docker:0.1 %nxt_indx% %cnt%
)