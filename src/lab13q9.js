import React from "react";

class Q9 extends React.Component {
    checkPalindrome() {
        let str = prompt("Enter string:");
        if (str === null) return { inputStr: "", reversedStr: "", result: "No input provided" };

        let reversedStr = str.split("").reverse().join("");
        let isPalindrome = str === reversedStr ? "Palindrome" : "Not Palindrome";

        return { inputStr: str, reversedStr: reversedStr, result: isPalindrome };
    }

    render() {
        const { inputStr, reversedStr, result } = this.checkPalindrome();

        return (
            <>
                <h1 style={{ textAlign: 'center' }}>Palindrome Checker</h1>
                {inputStr ? (
                    <div style={{ textAlign: 'center' }}>
                        <h2> You entered: {inputStr} </h2>
                        <h2> Reversed string: {reversedStr} </h2>
                        <h2> Result: {result} </h2>
                    </div>
                ) : (
                    <h2 style={{ textAlign: 'center', color: 'red' }}>
                        No input provided! Refresh the page.
                    </h2>
                )}
            </>
        );
    }
}

export default Q9;
