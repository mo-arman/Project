const Contact = () => {
    return(
        <div>
            <h1 className="font-bold p-4 m-4 text-xl">Contact Us</h1>
            <form>
                <input type="text" className="border border-black p-2 m-2" placeholder="name"/>
                <input type="text" className="border border-black p-2 m-2" placeholder="message"/>
                <button className="border border-black p-2 m-2 bg-green-200">Submit</button>
            </form>
        </div>
    );
};

export default Contact;