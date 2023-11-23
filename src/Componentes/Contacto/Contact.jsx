import { Fragment, useState } from "react";
import style from './Contact.module.css';
import '../../App.css'
import { NavLink, useNavigate } from "react-router-dom";
import wp from '/assets/whatsApp.png'

const Contact = () => {

    const [form, setForm] = useState({
        email: '',
        queries: '',
        phone: '',
        asunto: '',
        fullname: '',
        attachment: 'Ningun archivo seleccionado'
    });

    const [error, setError] = useState({});

    const errors = Object.keys(error).length || !form.email

    const handleForm = (event) => {
        if (event.target.name === 'attachment') {
            let name = [];
            let i = event.target.value.length - 1;
            while (event.target.value[i] !== '\\') {
                name.unshift(event.target.value[i])
                --i;
            }
            setForm({
                ...form,
                [event.target.name]: name.join('')
            })

        }
        else {
            setForm({
                ...form,
                [event.target.name]: event.target.value
            })
        }
        setError(validate({
            ...form,
            [event.target.name]: event.target.value
        }))
    }

    const validate = (forms) => {
        const errors = {};

        if (!/\S+@\S+\.\S+/.test(forms.email)) {
            errors.email = 'Ingrese email valido'
        }
        if (/^\s*$/.test(forms.email)) {
            errors.email = 'No puede estar vacio'
        }

        if (forms.queries.length < 10) {
            errors.queries = 'Mas de 10 caracteres'
        }

        if (/^\s*$/.test(forms.phone)) {
            errors.phone = 'No puede estar vacio'
        }
        else if (!/^[0-9]+$/.test(forms.phone)) {
            errors.phone = 'Ingrese solo numeros'
        }

        if (!forms.asunto) {
            errors.asunto = 'No puede estar vacio'
        }

        if (!forms.fullname) {
            errors.fullname = 'No puede estar vacio'
        }

        return errors;
    }


    const handelSubmit = (event) => {
        event.preventDefault()
        setForm({
            email: '',
            queries: '',
            phone: '',
            asunto: ''
        })
    }

    return (
        <Fragment >
            <h3 className={style.title}>Hace tu consulta GRATIS</h3>
            <section className={`${style.container}`}>
                <article className={style.wp}>

                    <p>Te dejamos dos maneras de comunicarte con Nosotros, atravez del formulario o por Whats App, de las dos maneras tendras la posibilidad de mandarnos algun escrito para darte una respuesta mas acertada con su caso</p>

                    <NavLink aria-label="Chat on WhatsApp" to='https://wa.me/543772409159'>
                        <img alt="Chat on WhatsApp" src={wp} width='200' />
                    </NavLink>
                </article>
                <form className={style.form} action="https://formsubmit.co/agustin87_7@hotmail.com" method="POST" enctype="multipart/form-data">

                    <label htmlFor="" className={style.label}>
                        <input className={style.label1} name="fullname" type="fullname" value={form.fullname} onChange={handleForm} placeholder="Nombre completo" />
                        {error.fullname && <p className={style.label2}>{error.fullname}</p>}
                    </label>

                    <label htmlFor="" className={style.label}>
                        <input className={style.label1} name="email" type="email" value={form.email} onChange={handleForm} placeholder="Correo electronico" />
                        {error.email && <p className={style.label2}>{error.email}</p>}
                    </label>

                    <label htmlFor="" className={style.label}>
                        <input className={style.label1} name="asunto" type="asunto" value={form.asunto} onChange={handleForm} placeholder="Asunto de la consulta" />
                        {error.asunto && <p className={style.label2}>{error.asunto}</p>}
                    </label>

                    <label htmlFor="" className={style.label}>
                        <textarea className={style.label1} name="queries" type="queries" rows="10" cols="40" value={form.queries} onChange={handleForm} placeholder="Mensaje de la consulta"></textarea>
                        {error.queries && <p className={style.label2}>{error.queries}</p>}
                    </label>

                    <input type="file" name="attachment" id="arch" onChange={handleForm} accept="image/png, image/jpeg, .pdf" multiple></input>

                    <label htmlFor="arch" className={style.span}>
                        <span className={style.span1}>{form.attachment}</span>
                        <span className={style.span2}>Cargar un archivo</span>
                    </label>

                    <label htmlFor="" className={style.label}>
                        <input className={style.label1} name="phone" type="phone" value={form.phone} onChange={handleForm} placeholder="Telefono" />
                        {error.phone && <p className={style.label2}>{error.phone}</p>}
                    </label>

                    <input type="hidden" name="_subject" value={form.asunto} />
                    <input type="hidden" name="_next" value="http://localhost:5173/"></input>
                    <input type="hidden" name="_captcha" value="false"></input>
                    <input type="hidden" name="_cc" value="agusdiazgarro@gmail.com"></input>
                    <input type="hidden" name="_template" value="table"></input>

                    <button className={`${errors && style.activ}`} type="submit" >Enviar</button>

                </form>
            </section>
        </Fragment>
    )
}

export default Contact;