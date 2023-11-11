import './Main.css';
import bg from './main-bg.jpg'

const Main = () => {
    return (
        <main className='main'>
            {/*<img src={ bg } alt="" className='bg' /> */}
            <h1 className='main-heading'>Підготовка до ЗНО та НМТ</h1>
            <h2 className='main-heading2'>Наші онлайн-курси ведуть найкращі викладачі України. Займайтеся в групі або індивідуально та сдавайте іспити на максимальний бал</h2>
            <input type="email" name='email' placeholder='Електронна адреса' className='form-input'/>
            <input type="submit" name='submit' value='Залишити заявку' className='button'/>
        </main>
    )
}

export default Main