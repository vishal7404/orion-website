import Accordion from 'react-bootstrap/Accordion';
import "./TextAccordion.css"
function TextAccourdion() {
  return (
    <Accordion defaultActiveKey="" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Why is Orion the best alternative to trading?</Accordion.Header>
        <Accordion.Body>
          The cryptocurrency rate has no effect on the sustainability of the rewards.The minimum entry threshold is equal to just a couple of cups of coffee.There is no need to wait for payouts - funds come instantly to your wallet.Rewards always depend only on the actions of the participant.The participant can receive the reward indefinitely, as long as he expands his team.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Is Orion safe?</Accordion.Header>
        <Accordion.Body>
          Register on the website to gain access to the Orion and Community.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Where will my profit come from?</Accordion.Header>
        <Accordion.Body>
          All earnings to your wallet will only come from the activity of other members who open NFT cards. Orion does not charge any additional fees.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>How much does it cost to participate in Orion BUSD?</Accordion.Header>
        <Accordion.Body>
          Participation in Orion BUSD is the automatic activation of NFT levels in two marketing programs. Activation costs start at 10 BUSD, not including minimum fees from the Smart Chain (BNB Chain) blockchain in the BNB cryptocurrency.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>What do I need to get started in Orion BUSD?</Accordion.Header>
        <Accordion.Body>
          No special knowledge is required. Every participant must have their own smartphone or laptop with an installed app (Trust Wallet, TokenPocket or MetaMask), which has a personal Smart Chain (BNB Chain) cryptocurrency wallet set up. To register, you need to have at least a minimum amount - 10 BUSD, and some BNB for a blockchain fee.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>How do I start?</Accordion.Header>
        <Accordion.Body>
          Register on the website to gain access to the Orion and Community. Study the instructions, guides and articles on marketing so you're ready to go. If you have questions and need assistance, get help from other members in the Orion . Activate NFT heroes and use them to make progress with your team.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default TextAccourdion;