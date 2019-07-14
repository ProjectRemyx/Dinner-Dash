# Technical Questions

## How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

I spent approximately 8 hours total on this coding test. It took me 4 hours to get the API functionality working. An additional 2 hours was used to ensure everything was clean and included as much of the requirements as I was capable of doing. The other 2 hours that this project is comprised of is split between looking into testing with Jest/Enzyme, adding React hooks, hosting the application and bug fixing. 

I have tested normal JavaScript using Jasmine but I have not tested React using Jest before. Being new to both React and using Jest/Enzyme, I felt that this would take me longer than just a day to learn how to do. I came to this conclusion after researching about testing briefly after finishing the MVP. I recognize this as a big flaw and as a result, I am currently looking into taking courses on UDemy about how to test in React using Jest and Ezyme. Test driven development is important and this was a big wake up call to me in that regard.

If I had more time I would implement Redux, get authorization for the real version of the API and do tests. Redux is very useful for state management and I have experience implementing it in a previous project. I also tried to use the real API but the auto response from OpenTable stated that it would take 3-6 weeks to process the request. Therefore I am using the open source API. Lastly, as touched on in the previous paragraph, I would add in extensive testing using Jest/Enzyme. 

## What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

The newest useful feature that was added to the latest version of React is hooks. Hooks allow the use of state and other React features without the need to write a class. In the code snippet below, useState is a hook, and so is useEffect. 

```javascript
   const[state, setState] = useContext(Context);
   const [userInput, setUserInput] = useState("");
   const [restaurantLocation, setRestaurantLocation] = useState("");
    
   useEffect(() => {
       if(restaurantLocation === "")
       {
           console.log("Restaurant location cannot be blank");
       }
       else
       {
           axios
           .get(`https://opentable.herokuapp.com/api/restaurants?city=${restaurantLocation}`)
               .then(res => {
                   let restaurant_list = res.data.restaurants;
                   setState({ restaurant_list: restaurant_list, heading: "Search Results" });
               })    
               .catch(err => console.log(err));
       }
   }, [restaurantLocation]);
```

## How would you track down a performance issue in production? Have you ever had to do this?

This is an interesting question. I have had to track down performance issues but not in a production environment. How I would look for performance issues depends on what the application is doing. If the application is doing API calls or SQL Queries then I immediately draw my attention to the proper use of async/await. Ensuring that the application follows best practices is usually the first step I take.

Running the application and testing it to see if there are any performance issues would be my second step. Is there any information that can be cached for better performance? Are there any bottle necks or issues with asynchronous code? For one of my applications (http://tridentgaming.org), I thought of this exact question and took the above steps in improving it.

## How would you improve the API that you just used?

I think that this API could be improved to provide more in-depth information. The official OpenTable API that requires authorization definitely provides more information compared to the open source one. A big improvement would be if the open source API had additional information such as: cuisine types, restaurant ratings as well as additional restaurants. 

If this question was in terms of API performance, then the biggest improvements would come from adding async/await and caching to the project.

## Please describe yourself using JSON

{
    "Name": "Jing",
    "LastName": "Cheng",
    "Age": 24,
    "Hobbies": 
    [
        "Programming",
        "Video Games",
        "Guitar",
        "Weightlifting",
        "Learning"
    ],
    "Interests": 
    [
        "Cooking",
        "Designing",
        "Technology",
        "E-Sports",
        "Strategy"
    ],
    "Education":
    [
        "Game Development",
        "Web Development"
    ]
    "Favorite Things":
    {
        "Food": "Shawarma",
        "Movie": "Fast and the Furious (Franchise)",
        "Car": "Nissan R34 Skyline",
        "Video Game": "Monster Hunter",
        "Quote": "When you were made a leader you weren't given a crown, you were given the responsibility to bring out the best in others. - Jack Welch"
    }
}

