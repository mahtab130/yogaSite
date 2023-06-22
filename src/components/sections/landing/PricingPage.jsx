import {Card} from '../../common/Card'
// import { Button } from '../../controllers/Button'

export const PricingPage = () => {
    return (
        <div
      style={{
        width: "100%",
        justifyContent: "center",
        height: "600px",
        backgroundColor:"#E5E5E5",
       paddingTop: "8rem",

      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontWeight: "700",
          fontSize: "50px",
          lineHeight: "29px",
        }}
      >
        Pricing
      </h1>
        <div style={{display: 'flex'}}>
          <Card />     
        </div>
      <div
      style={{
        width: "100%",
        justifyContent: "center",
        height: "300px",
        display: "flex",
        marginTop: "5rem",
      }}
    >
      {/* <div
        style={{
          width: "750px",
          height: "100px",
          boxShadow: "25px 25px 25px  rgba(0, 0, 0, 0.05)",
          padding: "30px",
          borderRadius: "10px",
          backgroundColor: "#fff"
        }}
      >
        <h1 style={{ marginLeft: "2rem" }}>Have any question abuot us</h1>
        <Button
          buttonName="Send Email"
          style={{
            marginLeft: "35rem",
            marginTop: "-10px",
            backgroundColor: "#2E4CFF",
            color: "white",
          }}
        />
        <p
          style={{
            marginLeft: "2rem",
            color: "grey",
          }}
        >
          Just drop us an email
        </p>
      </div> */}
    </div>
    </div>
    )
}