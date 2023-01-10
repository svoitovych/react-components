import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here in an agreement</p>
    </Modal>
  );

  return (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet
      a dui ut elementum. Phasellus sit amet dapibus ex, et placerat lacus.
      Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc sit
      amet augue vitae neque consectetur feugiat. Etiam ac nulla sit amet neque
      pellentesque interdum ut eget ante. Aenean et enim vitae lacus venenatis
      tempus. Nulla sed purus purus. Pellentesque vel commodo sapien. Sed eu
      pretium lectus, sed dictum tellus. Nullam non turpis molestie, pulvinar
      felis sed, ultricies nisi. Pellentesque eget lacinia leo, eu imperdiet
      elit. Fusce et viverra urna. Quisque rhoncus finibus hendrerit. Etiam eu
      nisl molestie, aliquet nibh vel, aliquam mi. Ut ac blandit eros.
      Vestibulum ullamcorper viverra enim. Aliquam malesuada maximus velit, id
      egestas magna tempus non. In cursus dui at tempor cursus. Fusce egestas
      bibendum felis. Mauris sagittis nunc sodales ligula pretium, in
      sollicitudin arcu mollis. Aenean cursus libero ipsum, ut malesuada nunc
      efficitur eu. Cras pretium est non nibh tristique, ac hendrerit ligula
      fermentum. In viverra consequat augue. Praesent sollicitudin massa a nunc
      tempor congue. Morbi tristique purus ac volutpat pharetra. Phasellus non
      est quam. Fusce sit amet arcu in urna tempor ultricies. Nullam eu metus
      sed eros scelerisque placerat. Morbi vel molestie augue. Praesent dui
      enim, facilisis vitae sapien ac, imperdiet suscipit metus. Nulla ac tempus
      erat. Integer vitae felis nec est auctor placerat eget volutpat ex. Etiam
      fringilla pharetra tellus a finibus. Nunc id urna ac nibh facilisis
      congue. In semper, ex in volutpat consequat, tortor neque interdum purus,
      ut aliquam nulla ante sed nisl. Etiam consequat enim dapibus ex pretium
      semper. Phasellus eu rutrum felis. Duis elementum sagittis bibendum.
      Pellentesque sit amet nisi venenatis, vehicula sapien nec, molestie urna.
      Maecenas non tortor lacinia, aliquam neque in, laoreet libero. Nunc
      hendrerit odio vel nulla dapibus, eu aliquet diam molestie. Pellentesque
      sed est a nunc convallis pulvinar non eu urna. Nunc ut imperdiet velit.
      Mauris consequat metus erat, nec ullamcorper sapien ultrices eget. Nulla
      hendrerit enim ac ornare pretium. Vivamus maximus sagittis lorem, eu
      venenatis nibh. In quis erat tristique, volutpat leo quis, porttitor
      felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
      tincidunt mollis iaculis. Vestibulum vehicula elit in enim tempus
      pulvinar. Phasellus quis ipsum eu arcu pellentesque blandit. Vestibulum
      ultricies, purus non ultrices suscipit, elit nulla suscipit metus, at
      elementum ante augue sit amet massa. Aenean at dolor a sapien consequat
      rutrum eget quis lacus. In a libero id lectus imperdiet dapibus. Aenean at
      dui aliquet, consectetur dolor non, porta risus.
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
};

export default ModalPage;
