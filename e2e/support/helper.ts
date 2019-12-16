    export function getRandomNumberOf(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    export function objectsAreEqual(arrayOfObjects) {
        let areEqual = true;
        for (let i = 1; i < arrayOfObjects.length; i++) {
            if (JSON.stringify(arrayOfObjects[i]) !== JSON.stringify(arrayOfObjects[0])) {
                areEqual = false;
                break;
            }
        }
        return areEqual;
    }

    export function getSubstring(string: string, numberOfCharacters: number) {
        let index = this.getRandomNumberOf(string.length - numberOfCharacters + 1);
        return string.substr(index, numberOfCharacters);
    }
