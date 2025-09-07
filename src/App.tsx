import "./App.css";
import { DecorativeDivider } from "./assets/DecorativeDivider";
import FloralIcon from "./assets/FloarIcon";
import HeartDivider from "./assets/HeartDivider";
import { LocationPin } from "./assets/LocationPin";
import { Button } from "./components/Button";

function App() {
  return (
    <main>
      <div className="icon">
        <FloralIcon />
      </div>
      <div className="cal">
        <h2 className="month">SEPTEMBER</h2>
        <div className="w-box">
          <div className="m-box">
            <p className="mon">Fri</p>
            <p className="day">19</p>
          </div>
          <div className="m-box">
            <p className="mon">Sat</p>
            <p className="day">20</p>
          </div>
          <div className="m-box">
            <p className="mon">Sun</p>
            <p className="day">21</p>
          </div>
          <div className="m-box ">
            <p className="mon">Mon</p>
            <div className="day abs">
              22
              <HeartDivider />
            </div>
          </div>
          <div className="m-box">
            <p className="mon">Tue</p>
            <p className="day">23</p>
          </div>
          <div className="m-box">
            <p className="mon">Wed</p>
            <p className="day">24</p>
          </div>
          <div className="m-box">
            <p className="mon">Thu</p>
            <p className="day">25</p>
          </div>
        </div>
      </div>
      <div className="center-box">
        <p className="save">Save The Day</p>
        <p className="for-w">FOR THE WEDDING OF</p>
        <p className="names">
          Niloofar <span>&</span> Erfan
        </p>
        <p className="at">at</p>
        <p className="time">13:00</p>
      </div>
      <div className="bottom-box">
        <Button
          style={{
            width: "80%",
            flex: 1,
            margin: "auto",
            marginBottom: "16px",
          }}
          icon={<LocationPin />}
          onClick={() =>
            (window.location.href = "https://maps.app.goo.gl/uNWPguwxdMVE4yeU8")
          }
        />
        <Button
          style={{
            width: "80%",
            flex: 1,
            margin: "auto",
          }}
          onClick={() =>
            (window.location.href = "https://nshn.ir/50_bvSDfQxM_dO")
          }
          text="Neshan"
        />
        <p className="address">
          پایین میدان پونک، بزرگراه اشرفی اصفهانی، نبش خیابان غروی، ساختمان
          رونیکا پالاس، طبقه 3، واحد 133 ساعت 13:00
        </p>
        <div className="b-icon">
          <DecorativeDivider />
        </div>
      </div>
    </main>
  );
}

export default App;
