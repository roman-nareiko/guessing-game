class GuessingGame {
    constructor() {
        this._min = 0;
        this._max = 0;
        this._result = 0;
    }

    setRange(min, max) {
        this._min = min;
        this._max = max;
    }

    guess() {
        this._result = Math.round(this._min + (this._max - this._min) / 2);

        return this._result;
    }

    lower() {
        this._max = this._result;   
    }

    greater() {
        this._min = this._result;
    }
}

module.exports = GuessingGame;
