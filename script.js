class TrafficLightStateMachine {
    constructor() {
        this.states = {
            GREEN: 'green',
            YELLOW: 'yellow',
            RED: 'red',
        };
        this.currentState = this.states.RED; // Initial state
        this.init();
    }

    init() {
        this.updateLight();
        setInterval(() => {
            this.changeState();
            this.updateLight();
        }, 3000); // Change state every 3 seconds
    }

    changeState() {
        switch (this.currentState) {
            case this.states.RED:
                this.currentState = this.states.GREEN;
                break;
            case this.states.GREEN:
                this.currentState = this.states.YELLOW;
                break;
            case this.states.YELLOW:
                this.currentState = this.states.RED;
                break;
            default:
                console.log('Invalid State');
        }
    }

    updateLight() {
        const lights = document.querySelectorAll('.light');
        lights.forEach(light => light.style.opacity = '0.3'); // Turn off all lights

        switch (this.currentState) {
            case this.states.RED:
                lights[0].style.opacity = '1'; // Red light on
                break;
            case this.states.YELLOW:
                lights[1].style.opacity = '1'; // Yellow light on
                break;
            case this.states.GREEN:
                lights[2].style.opacity = '1'; // Green light on
                break;
        }

        console.log(`Current State: ${this.currentState}`);
    }
}

// Initialize the traffic light state machine
const trafficLight = new TrafficLightStateMachine();
