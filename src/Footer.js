import React from "react";


const Footer=()=>
{ return(
    <div>
    <footer className="py-5 bg-dark">
        
    <div className="container mx-0 px-5">
        <div className="row text-center mx-5 px-1">
            
            <div className="col text-white ">
                <h5><a href="#" className="text-decoration-none text-grey">About</a></h5>
                <p><a href="#" className="text-decoration-none text-white">Contact Us</a></p>
                <p><a href="#" className="text-decoration-none text-white">About Us</a></p>
                <p><a href="#" className="text-decoration-none text-white">Careers</a></p>
                <p><a href="#" className="text-decoration-none text-white">Press</a></p>
            </div>
            <div className="col text-white">
                <h5><a href="#" className="text-decoration-none text-grey">Help</a></h5>
                <p><a href="#" className="text-decoration-none text-white">Payments</a></p>
                <p><a href="#" className="text-decoration-none text-white">Shipping</a></p>
                <p><a href="#" className="text-decoration-none text-white">Cancellation  Reutrns</a></p>
                <p><a href="#" className="text-decoration-none text-white">FAQ</a></p>
            </div>
             <div className="col text-white">
                <h5><a href="#" className="text-decoration-none text-grey">Policy</a></h5>
                <p><a href="#" className="text-decoration-none text-white">Return Policy</a></p>
                <p><a href="#" className="text-decoration-none text-white">Term Of Use</a></p>
                <p><a href="#" className="text-decoration-none text-white">Security</a></p>
                <p><a href="#" className="text-decoration-none text-white">Privacy</a></p>
            </div>
            <div className="col text-white">
                <h5><a href="#" className="text-decoration-none text-grey">Social</a></h5>
                <p><a href="#" className="text-decoration-none text-white">Twitter</a></p>
                <p><a href="#" className="text-decoration-none text-white">Instagram</a></p>
                <p><a href="#" className="text-decoration-none text-white">YouTube</a></p>
            </div>
        </div>
        
    <hr claasName="text-white" />
    <p className="m-0 text-center text-white">Copyright &copy; Your Website 2022</p></div>
</footer>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
</div>
);
}
export default Footer;