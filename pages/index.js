import Summary from '../components/summary/index'
import Countries from '../components/countries/index'

export default function Home({ props }) {
  return (
    <div className="container">
      <Summary />
      <Countries />
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap');
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Karla',sans-serif;
          background: #2a3144;
        }

        * {
          box-sizing: border-box;
        }
        .extra_display {
          padding: 50px;
          color: #e66767;
          text-align: center;
        }
        .extra_display span {
          font-weight: 700;
        }
        .title {
          padding: 20px;
          font-size: 40px;
          color: #786fa6;
        }
        .header_main {
          background: #313a52;
          padding: 30px;
          font-family: 'Karla', sans-serif;
        }
        .header_main.countries {
          background: #37405a;
        }
        .extra_details {
          background: #2a3144;
          padding: 20px;
          color: #d8d7d7;
        }
        .info_box {
          display: inline-block;
          width: 33%;
          text-align: center;
        }
        .info_box span {
          display: block;
          margin-top: 20px;
          font-size: 14px;
          opacity: 0.8;
        }
        .info_box.total {
          color: #f7d694;
        }
        .info_box.deaths {
          color: #e66767;
        }
        .info_box.recoveries {
          color: #37e6bb;
        }
        h4 {
          margin-top: 10px;
          margin-bottom: 0px;
          font-weight: 400;
        }
        h3 {
          margin-bottom: 5px;
        }
        .countries_select {
          background: #475375;
        }
        select {
          flex: 1;
          padding: 0 5px;
          color: #44aaf1;
          font-size: 17px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: none;
          border: 0 !important;
          background: #475375;
        }
        .select {
          font-family: 'Karla',sans-serif;
          display: flex;
          width: 97%;
          margin: 0 auto;
          height: 3.5em;
        }
      `}</style>
    </div>
  );
}
