import 'bootstrap/dist/css/bootstrap.css'

const Calculator = () => {
    var firstNum = 0;
    var secondNum = 0;
    var result ;

    const calculator = (operation) => {

        switch (operation) {
            case '+':
                result = parseInt(firstNum) + parseInt(secondNum);
                break;
            case '-':
                result = parseInt(firstNum) - parseInt(secondNum);
                break;
            case 'x':
                result = parseInt(firstNum) * parseInt(secondNum);
                break;
            case '/':
                result = parseInt(firstNum) / parseInt(secondNum);
                break;
        }


    }

    return (
        <form>
            <h1>Calculator</h1>
            <div className='row'>

                <div className='col-sm-3'>
                    <input
                        type='number'
                        className='form-control'
                        placeholder='Điền số thứ nhất'
                        onChange={(e) => { firstNum = e.target.value }}
                    />
                </div>
                <div className='col-sm-3'>
                    <input
                        type='number'
                        className='form-control'
                        placeholder='Điền số thứ hai'
                        onChange={(e) => { secondNum = e.target.value }}
                    />
                </div>
            </div>

            <br/>
            <button
                type='button'
                className='btn btn-primary mx-sm-3'
                onClick={() => {
                    calculator('+')
                }}
            >
                +
            </button>

            <button
                type='button'
                className='btn btn-primary mx-sm-3'
                onClick={() => {
                    calculator('-')
                }}
            >
                -
            </button>

            <button
                type='button'
                className='btn btn-primary mx-sm-3'
                onClick={() => {
                    calculator('x')
                }}
            >
                X
            </button>

            <button
                type='button'
                className='btn btn-primary mx-sm-3'
                onClick={() => {
                    calculator('/')
                }}
            >
                /
            </button>




            <br />
            <br />
            <h6>Kết quả: {result}</h6>
            <br />




        </form>
    )
}

export default Calculator