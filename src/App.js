import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";
import { MealsInCategory } from "./pages/MealsInCategory";
import { MealRecipe } from "./pages/MealRecipe";

function App() {
    return (
        <>
            <Router basename="/react-meal">
                <Header />
                <main className="container content">
                    {/* Switch остановливает дальнейший перебор при
                    совпадении path и url в браузере */}
                    <Switch>
                        {/* exact добавляется для точного сопоставления иначе по ссылке '/contact' 
                          отобразить и домашня страница и контакаты т.к. будет вхождение по '/' */}
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contacts" component={Contact} />
                        {/* :id динамический параметр */}
                        <Route path="/category/:categoryName" component={MealsInCategory} />
                        <Route path="/recipe/:idMeal" component={MealRecipe} />
                        {/* Если совпадении нет, то отобразиться последняя страница */}
                        <Route component={NotFound} />
                    </Switch>
                </main>
                <Footer />
            </Router>
        </>
    );
}

export default App;
