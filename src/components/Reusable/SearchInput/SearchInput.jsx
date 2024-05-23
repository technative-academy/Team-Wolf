

export default function SearchInput({ input, setInput }) {
    function handleChange(event) {
        setInput(event.target.value);
    }

    return (
        <>
            <input
                type="text"
                placeholder="Search Here..."
                value={input}
                onChange={handleChange}
            />
        </>
    );
}