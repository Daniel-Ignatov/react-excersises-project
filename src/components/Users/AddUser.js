import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./AddUser.module.css"
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge === 0) {
            setError({
                title: "Invalid Input",
                message: "Please enter values"
            });
            return;
        }
        //+ The unary plus operator (+) precedes its operand and evaluates to its operand but attempts to convert it into a number, if it isn't already.
        if (+enteredAge < 1) {
            setError({
                title: "Invalid Input",
                message: "Please enter positive age values"
            });
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredAge("");
        setEnteredUsername("");
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" value={enteredUsername} onChange={usernameChangeHandler}></input>
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}></input>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;