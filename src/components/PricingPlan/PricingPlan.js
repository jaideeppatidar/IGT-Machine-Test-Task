import { useState } from 'react';
import './PricingPlan.css';
import { pricingPlans, iconMap } from '../../utils/data';

const PricingPlan = () => {
  const [activePlan, setActivePlan] = useState('monthly');

  const handleToggle = (type) => {
    setActivePlan(type);
  };

  return (
    <div className="pricing-container">
      <h4 className="plan-heading">PRICING PLAN</h4>
      <h2 className="plan-title">Choose your pricing policy</h2>

      <div className="plan-toggle">
        <button
          className={`toggle-button ${activePlan === 'monthly' ? 'active' : ''}`}
          onClick={() => handleToggle('monthly')}
        >
          Monthly Plan
        </button>
        <button
          className={`toggle-buttons ${activePlan === 'annual' ? 'active' : ''}`}
          onClick={() => handleToggle('annual')}
        >
          Annual Plan
        </button>
      </div>

      <div className="plans">
        {pricingPlans[activePlan].map((plan) => (
          <div key={plan.id} className={`plan-card ${plan.id}`}>
            {plan.recommended && <span className="recommended">Recommended</span>}
            <div className="card-body">
              <div className="plan-header">
                <div>
                  <h3 className="plan-name">{plan.name}</h3>
                  <p className="plan-desc">{plan.desc}</p>
                </div>
                {plan.price && (
                  <p className="price">
                    Starting from <br /> <strong className="pricesmain">{plan.price}</strong>
                  </p>
                )}
              </div>

              <ul className="features">
                {plan.features.map((feature, i) => (
                  <li key={i} className={feature.included ? '' : 'disabled'}>
                    <span className="icon">
                      <img src={iconMap[feature.included]} alt={feature.included ? 'check' : 'cross'} />
                    </span>
                    {feature.text}
                  </li>
                ))}
              </ul>
            </div>
            <button className="action-button">{plan.button}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlan;
