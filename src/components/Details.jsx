import { useParams } from "react-router-dom";
import React from "react";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

class Details extends React.Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    const response = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );
    const data = await response.json();
    // this.setState({ loading: false, ...data.pets[0] });
    this.setState(Object.assign({ loading: false }, data.pets[0]));
  }

  render() {
    if (this.state.loading) {
      return <h2>Loading ..</h2>;
    }

    const { name, city, description, animal, breed, state, images } =
      this.state;
    throw new Error("sorry..");
    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>
            {animal}-{breed}-{city}, {state}
          </h2>
          <button>Adopt me!</button>
          <p>{description}</p>
        </div>
        <Carousel images={images} />
      </div>
    );
  }
}

function WrappedDetails() {
  const params = useParams();
  return (
    <ErrorBoundary>
      <Details params={params} />
    </ErrorBoundary>
  );
}

export default WrappedDetails;
