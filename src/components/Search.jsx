import { useState } from "react";

export function Search({ cb = Function.prototype }) {
    const [value, setValue] = useState("");

    const handleKey = (event) => {
        if (event.key === "Enter") {
            handleSubmit();
        }
    };
    const handleSubmit = () => {
        cb(value);
    };

    return (
        <div className="row">
            <div className="input-field col s12">
                <input
                    id="search-field"
                    type="search"
                    placeholder="search"
                    onKeyDown={handleKey}
                    onChange={(event) => setValue(event.target.value)}
                    value={value}
                ></input>
                <button
                    className="btn"
                    onClick={handleSubmit}
                    style={{ position: "absolute", top: 0, right: 0 }}
                >
                    Search
                </button>
            </div>
        </div>
    );
}
