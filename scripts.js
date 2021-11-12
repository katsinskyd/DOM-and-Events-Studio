// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {
    let height = 0;
    let left = 0;
    const rocket = document.getElementById("rocket");
    const flightStatusText = document.getElementById("flightStatus");
    const takeoffButton = document.getElementById("takeoff");
    const landButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const upButton = document.getElementById("upButton");
    const downButton = document.getElementById("downButton");
    const rightButton = document.getElementById("rightButton");
    const leftButton = document.getElementById("leftButton");
    let shuttleLaunched = false;

    const returnToOrigin = () => {
        rocket.style.left = '0px';
        rocket.style.bottom = '0px';
    };

    takeoffButton.addEventListener('click', () => {
        if (!shuttleLaunched) {
            let confirmLaunch = window.confirm("Confirm that the shuttle is ready for takeoff.");
            if (confirmLaunch) {
                shuttleLaunched = true;
                flightStatusText.innerHTML = "Shuttle in flight.";
                shuttleBackground.style.backgroundColor='blue';
                height += 10000;
                shuttleHeight.innerHTML = height;
                rocket.style.bottom = `${height / 1000}px`;
            };
        } else {
            window.alert("Shuttle is already launched.");
        };
    });

    landButton.addEventListener('click', () => {
        if (shuttleLaunched) {
            window.alert("The shuttle is landing. Landing gear engaged.");
            flightStatusText.innerHTML = "The shuttle has landed.";
            shuttleBackground.style.backgroundColor='';
            height = 0;
            shuttleHeight.innerHTML = height;
            returnToOrigin();
            shuttleLaunched = false;
        } else {
            window.alert("Shuttle is landed.");
        };
    });

    abortButton.addEventListener('click', () => {
        if (shuttleLaunched) {
            let confirmAbort = window.confirm("Confirm that you want to abort the mission.");
            if (confirmAbort) {
                flightStatusText.innerHTML = "Mission aborted.";
                shuttleBackground.style.backgroundColor='';
                height = 0;
                shuttleHeight.innerHTML = height;
                rocket.style.bottom = `${height / 1000}px`;
                returnToOrigin();
                shuttleLaunched = false;
            };
        } else {
            window.alert("Mission has not begun.")
        };
    });

    upButton.addEventListener('click', () => {
        if (shuttleLaunched) {
            height += 10000;
            shuttleHeight.innerHTML = height;
            rocket.style.bottom = `${height / 1000}px`;
        };
    });

    downButton.addEventListener('click', () => {
        if (shuttleLaunched) {
            if (height !== 0) {
                height -= 10000;
                shuttleHeight.innerHTML = height;
                rocket.style.bottom = `${height / 1000}px`;
            };
        };
    });

    rightButton.addEventListener('click', () => {
        if (shuttleLaunched) {
            left += 10;
            rocket.style.left = `${left}px`;
        };
    });

    leftButton.addEventListener('click', () => {
        if (shuttleLaunched) {
            if (rocket.style.left > `0px`) {
                left -= 10
                rocket.style.left = `${left}px`;
            };
        };
    });
};

window.addEventListener("load", init);	