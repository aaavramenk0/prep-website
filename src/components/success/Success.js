import './Success.css'

const Success = () => {
    return (
        <section className="success">
            <div className="success-div">
                <h3 className="success-heading">Успіхи наших учнів</h3>

                <div className="success-icons">
                    <div className="success-icon">
                        <p className="success-text">99%</p>
                        <p>успішно здали ДПА/ЗНО після проходження наших курсів</p>
                    </div>
                    <div className="success-icon">
                        <p className="success-text">96%</p>
                        <p>залишили позитивний відгук про наші курси</p>
                    </div>
                    <div className="success-icon">
                        <p className="success-text">98%</p>
                        <p>стали більш впевненими в своїх знаннях після проходження <br/> наших курсів</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Success