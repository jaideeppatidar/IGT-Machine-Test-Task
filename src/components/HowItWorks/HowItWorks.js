import "./HowItWorks.css";

import { steps } from '../../utils/data'

export default function HowItWorks() {
    return (
        <div className="how-it-works">
            <h4 className="subtitle">WHATS THE FUNCTION</h4>
            <h2 className="title">Let’s see how it works</h2>
            <div className="steps">
                {steps.map((step, index) => (
                    <div key={index} className="step">
                        <div>
                            <div className="circles">{step.number}</div>
                        </div>
                        <h3 className="step-title">{step.title}</h3>
                        <p className="description">{step.description}</p>
                        {index < steps.length - 1 && <div className="dotted-line" />}
                    </div>
                ))}
            </div>
        </div>
    );
}
