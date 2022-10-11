class TriviaService{
    private readonly baseUrl = 'https://opentdb.com/';

    public async fetchCategories(){
        const categories = await fetch(`${this.baseUrl}api_category.php`)
        .then(response => response.json())
        .then(data => data['trivia_categories']);
        return categories; 
    }

    public async fetchQuiz(amount:Number,categoryId:Number,difficulty:String){
        const questions = await fetch(`${this.baseUrl}/api.php?amount=${amount}&category=${categoryId}&difficulty=${difficulty}`)
        .then(response=>console.log(response));
    }
}

export const triviaService = new TriviaService();