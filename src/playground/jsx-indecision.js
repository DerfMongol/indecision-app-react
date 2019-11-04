console.log('App.js is running')

const app = {
    title: 'Indecision App',
    subtitle: 'I have no idea what the app is going to do',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault()

    const option = e.target.elements.option.value

    if (option) {
        app.options.push(option)
        e.target.elements.option.value = ''
        render()
    }
}

const removeAll = () => {
    app.options = []
    render()
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option)
}

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length ? 'Here are your two options': 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
            {
                app.options.map((option, index) => <li key={index}>{option}</li>)
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    )
    ReactDOM.render(template, appRoot)
}

const appRoot = document.getElementById('app')
render()

// const user = {
//     name: 'Andrew Feeney',
//     age: 29,
//     location: 'Austin'
// }
// const userName = 'Mike Steins'
// const userAge = 44
// const userLocation = 'Cincinatti'

// function getLocation(location) {
//     if (location) {
//         return <p>Location: {location}</p>
//     }
// }

// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         {(user.age && user.age >= 18) && <p>Age: {user.age }</p>}
//         {getLocation(user.location)}
//     </div>
// )