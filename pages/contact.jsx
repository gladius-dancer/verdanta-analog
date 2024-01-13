import MainController from "@/components/MainController";
import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { CreateAppointmentService } from "@/services/appointment/appointment";
import { useDispatch } from "react-redux";
import Link from "next/link";

const Contact = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    first_name: yup.string().required("Имя обязательно"),
    last_name: yup.string().required("Фамилия обязательно"),
    phone: yup.string().required("Телефон обязательно"),
    date_time: yup.string().required("Дата и времия обязательно"),
    comment: yup.string(),
  });

  const methods = useForm({ resolver: yupResolver(schema) });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    const formData = {
      first_name: data?.first_name,
      last_name: data?.last_name,
      phone: data?.phone,
      appointment_date: new Date(data.date_time)
        ?.toLocaleDateString()
        .split(".")
        .reverse()
        .join("-"),
      appointment_time: new Date(data.date_time)
        ?.toLocaleTimeString()
        .slice(0, 5),
      comment: data?.comment,
    };

    console.log(formData);

    dispatch(CreateAppointmentService(formData)).then(() => {
      reset();
    });
  };

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <MainController>
      <section
        className="inner-page-banner bg-common inner-page-top-margin"
        style={{
          backgroundImage:
            "url(../static/images/laser-eye-surgery-what-you-need-to-know.jpeg)",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumbs-area">
                <h1>
                  <Link href="/">Ayziya</Link>
                </h1>
                <ul>
                  <li>
                    <Link href="/contact">Контакты</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-wrap-layout">
        <div className="container">
          <div className="google-map-area">
            <div id="googleMap" style={{ width: "100%", height: "496px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5886.378604723188!2d59.59291837301637!3d42.46626239735101!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDLCsDI3JzU5LjMiTiA1OcKwMzUnMzQuMyJF!5e0!3m2!1sen!2s!4v1704636601539!5m2!1sen!2s"
                style={{ border: 0, width: "100%", height: "100%" }}
                allowFullScreen=""
              ></iframe>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="contact-box-layout1">
                <h3 className="title title-bar-primary4">Запись на приём</h3>
                <form
                  className="contact-form-box"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        {...register("first_name")}
                        type="text"
                        placeholder="Имя"
                        className="form-control"
                      />
                      <div className="help-block with-errors">
                        {errors.first_name?.message && (
                          <span>{errors.first_name?.message}</span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        {...register("last_name")}
                        type="text"
                        placeholder="Фамилия"
                        className="form-control"
                      />
                      <div className="help-block with-errors">
                        {errors.last_name?.message && (
                          <span>{errors.last_name?.message}</span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        {...register("phone")}
                        type="text"
                        placeholder="Телефон"
                        className="form-control"
                      />
                      <div className="help-block with-errors">
                        {errors.phone?.message && (
                          <span>{errors.phone?.message}</span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        {...register("date_time")}
                        type="datetime-local"
                        placeholder="Дата и времия"
                        className="form-control"
                      />
                      <div className="help-block with-errors">
                        {errors.date_time?.message && (
                          <span>{errors.date_time?.message}</span>
                        )}
                      </div>
                    </div>

                    <div className="col-12 form-group">
                      <textarea
                        {...register("comment")}
                        placeholder="Комментария"
                        className="textarea form-control"
                        id="form-message"
                        rows="7"
                        cols="20"
                      ></textarea>
                      <div className="help-block with-errors">
                        {errors.comment?.message && (
                          <span>{errors.comment?.message}</span>
                        )}
                      </div>
                    </div>
                    <div className="col-12 form-group margin-b-none">
                      <button type="submit" className="item-btn">
                        Отправить
                      </button>
                    </div>
                    <div className="col-12 form-group margin-b-none">
                      <a
                        id="success"
                        href=""
                        className="item-btn"
                        style={{ display: "none" }}
                      >
                        Отправлен
                      </a>
                    </div>
                  </div>
                  <div className="form-response"></div>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-box-layout1">
                <h3 className="title title-bar-primary4">Адрес</h3>
                <div className="contact-info">
                  <ul>
                    <li>
                      <i className="fas fa-map-marker-alt"></i>г. Нукус ул.
                      Танирхан, дом 22 а.
                    </li>
                    <li>
                      <i className="fas fa-phone"></i>
                      <a href="tel: +998612297444">+99861 229 74 44</a>
                    </li>
                    <li>
                      <i className="fas fa-phone"></i>
                      <a href="tel: +998992607474">+99899 260 74 74</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainController>
  );
};

export default Contact;
