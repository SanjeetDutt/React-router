import {Form} from "react-router-dom";

export const EventForm = () => {
    return (
        <Form>
            <input type="text" name="title" placeholder="title"/>
            <input type="text" name="description" placeholder="description"/>
            <input type="text" name="image" placeholder="image"/>
            <input type="date" name="date" placeholder="date"/>

            <button type="submit">Save</button>
        </Form>
    );
};