class TriviaService{
    private readonly baseUrl = 'https://opentdb.com/';


    /**
     * This function fetches all existing quiz categories from the API, and returns them in an array.
     *
     * @return {[String]} 
     * @memberof TriviaService
     */
    public async fetchCategories(){
        const categories = await fetch(`${this.baseUrl}api_category.php`)
        .then(response => response.json())
        .then(data => data['trivia_categories']);
        return categories; 
    }
    
    /**
     * This function fetches a random list of questions from the API
     * This function is not used anymore in this application, since the questions are stored on the server-side.
     * @param {Number} amount
     * @param {Number} categoryId
     * @param {String} difficulty
     * @memberof TriviaService
     */
    public async fetchQuiz(amount:Number,categoryId:Number,difficulty:String){
        const questions = await fetch(`${this.baseUrl}/api.php?amount=${amount}&category=${categoryId}&difficulty=${difficulty}`)
        .then(response=>console.log(response));
    }
}

export const triviaService = new TriviaService();