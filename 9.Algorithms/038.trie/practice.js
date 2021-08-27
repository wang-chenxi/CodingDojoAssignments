class TrieNode {
    constructor(char = null) {
        // each node stores its own character value
        this.character = char;

        // each node has a JS object
        // the keys are characters
        // the values are TrieNodes
        this.children = {};

        // each node has a boolean check to see if its the end of a word
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        // root node represents an empty string
        this.root = new TrieNode("");
    }

    /**
     * Adds the given to the Trie.
     * @param {string} word Word that is being added to the Trie
     * @returns {boolean} true/false status of adding the word
     */
    add(word) {
        // edge case to exit early if the input word is empty
        if (word === "") return false;

        // SETUP
        let node = this.root;
        word = word.toLowerCase();

        for (const char of word) {
            if (!node.children.hasOwnProperty(char)) {
                node.children[char] = new TrieNode(char);
            }

            node = node.children[char];
        }
        node.isEndOfWord = true;

        return true;
    }

    /**
     * Searches for a Complete word in the Trie.
     * This algo does not check for substrings.
     * @param {string} word Word to search for in the Trie
     * @returns {boolean} true/false was the word found
     */
    contains(word) {
        // edge case to exit early if the input word is empty
        if (word === "") {
            return false;
        }
        // SETUP
        let node = this.root;
        let newString = "";
        let wordLength = word.length;
        let count = 0;

        //Traverse through the Trie, check if the work entered is contained within list
        for (const char of word) {

            //If the word/character exists within the trie continue to loop through
            //add all the values of the characters to the new string
            //Have the node traverse through the trie by equaling its node.child at the end
            if (node.children.hasOwnProperty(char)) {
                ++count;
                newString += node.children[char].character;
                node = node.children[char];

                if (count == wordLength && node.isEndOfWord == false) {
                    return false;
                }
            }
            else {
                return false; //If the word doesnt exist, return false
            }
        }
        //The word exists within trie, return the word
        return newString;
    }

    /**
     * Recursively print the characters in the Trie
     * @param {TrieNode} node  The current node.
     */
    printAllKeys(node = this.root) {
        for (let c in node.children) {
            console.log(c)
        }
        for (let i = 97; i < 123; i++) {
            let letter = String.fromCharCode(i);
            // console.log(letter)
            let child = node.children[letter];
            if (child != null) {
                // currentNode = child;
                this.printAllKeys(child);
            }


        }
    }

    /**
     * Recursively find the number of characters in the Trie
     * Note: the empty string at the root counts as size = 0
     * @param {TrieNode} node the current node
     * @param {int} size the size of the Trie
     * @returns {int} the size of the Trie
     */
    size(node = this.root, size = 0) { }
}

var words = [
    "the",
    "a",
    "there",
    "answer",
    "any",
    "by",
    "bye",
    "their",
    "out",
    "outside",
    "quest",
];

const trie = new Trie();
for (const w of words) {
    trie.add(w);
}
console.log(trie);

console.log(trie.contains("any") + "\n\n");

trie.printAllKeys();