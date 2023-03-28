import React from "react"

const Footer = () => {
  return (
    <footer>
        <div className="contain">
            <div className="box1">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
            <div className="box2">
                <a href="#">Link 4</a>
                <a href="#">Link 5</a>
                <a href="#">Link 6</a>
            </div>

            <div className="box3">
                <h4>Join us</h4>
                <form>
                <div>
                    <label>Name</label>
                    <input type="text"></input>
                </div>

                <div>
                    <label>Email</label>
                    <input type="text"></input>
                </div>

                <div>
                    <input type="submit"></input>
                </div>
                    

                </form>
            </div>
        </div>

        <div>
            <h4>Social Media</h4>
           <a href="#"> <img src="C:\Users\Administrator\task-app\src\linkedin.jpg"></img></a>
           <a href="#"> <img src="C:\Users\Administrator\task-app\src\linktree.png"></img></a>
        </div>

        <div className="last">
            <h3>Copyright @ 2023</h3>
        </div>
    </footer>
  )
}

export default Footer