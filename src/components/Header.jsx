import logo from '../assets/investment-calculator-logo.png'

export default function Header() {
    return (
        <header id="header">
            <img src={logo} alt="Logo" />
            <h1>คำนวณการลงทุน</h1>
        </header>
    );
}