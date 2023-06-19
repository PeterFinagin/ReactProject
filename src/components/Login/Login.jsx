import React from "react";
import {reduxForm, Field} from "redux-form";
import {connect} from "react-redux";
import {Input} from "../../common/formsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import styles from "../../common/formsControls/FormsControls.module.css"

const LoginForm = (handleSubmit, error) => {
    const maxLength30 = maxLengthCreator(30)
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field validate={[required, maxLength30]}
                       placeholder={"Email"}
                       name={"email"}
                       component={Input}/>
            </div>
            <div>
                <Field validate={[required, maxLength30]}
                       placeholder={"Password"}
                       name={"password"}
                       component={Input}
                       type={"password"}/>
            </div>
            <div>
                <Field type={"checkbox"}
                       name={"rememberMe"}
                       component={Input}/>
                <span>Remember me</span>
            </div>
            {error ? <div className={styles.errorSummary}>{error}</div> : undefined}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (login, isAuth) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe)
    }
    if (isAuth) {
        return <Navigate replace to={"/profile"}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)