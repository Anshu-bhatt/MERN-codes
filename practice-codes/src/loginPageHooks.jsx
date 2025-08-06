import React from "react";

function LoginPageHooks() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [mobile, setMobile] = React.useState("");
    const [semester, setSemester] = React.useState("1");
    const [gender, setGender] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [agree, setAgree] = React.useState(false);

    const handleSubmit = () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        if (!agree) {
            alert("You must agree to the terms and conditions");
            return;
        }
        // Handle form submission logic here
        console.log({
            name,
            email,
            mobile,
            semester,
            gender,
            message,
            password,
            confirmPassword,
            agree
        });
    };

    return (
        <div className="login-page-root">
            <h1>Login Page</h1>
            <h2>Register</h2>

            Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br />
            Email: <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
            Mobile: <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} /><br />

            Semester:
            <select value={semester} onChange={(e) => setSemester(e.target.value)}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                    <option key={sem} value={sem}>{sem}</option>
                ))}
            </select><br />

            Gender:
            <input
                type="radio"
                name="gender"
                value="Male"
                checked={gender === "Male"}
                onChange={(e) => setGender(e.target.value)}
            /> Male
            <input
                type="radio"
                name="gender"
                value="Female"
                checked={gender === "Female"}
                onChange={(e) => setGender(e.target.value)}
            /> Female
            <br />

            Message: <textarea value={message} onChange={(e) => setMessage(e.target.value)} /><br />
            Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
            Confirm Password: <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /><br />

            <label>
                <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                />
                Agree to terms
            </label><br />

            <input type="button" value="Submit" onClick={handleSubmit} />
        </div>
    );
}

export default LoginPageHooks;
