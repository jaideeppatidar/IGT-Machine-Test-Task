import React, { useState } from 'react';
import { faqData } from '../../utils/data';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(2); 

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section style={{ maxWidth: '800px', margin: '100px auto', padding: '0 20px' }}>
      <p style={{
        color: '#EF9E48',
        fontSize: 14,
        textTransform: 'uppercase',
        letterSpacing: 1.5,
        textAlign: 'center'
      }}>
        Frequent Question
      </p>

      <h2 style={{
        color: '#0F2137',
        fontSize: 36,
        textAlign: 'center',
        marginBottom: 40,
        fontWeight: 700,
        fontFamily: 'DM Sans',
        letterSpacing: 1
      }}>
        Do you have any question
      </h2>

      <div>
        {faqData.map((item, index) => (
          <div
            key={index}
            style={{
              borderTop: '1px solid #e0e0e0',
              padding: '20px 0',
              cursor: 'default',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span
                onClick={() => toggle(index)} // ✅ Only this toggles
                style={{
                  color: '#ffffff',
                  fontSize: 18,
                  fontWeight: 'bold',
                  minWidth: 30,
                  height: 30,
                  textAlign: 'center',
                  lineHeight: '30px',
                  background: '#3FDBB1',
                  padding: 1,
                  borderRadius: 100,
                  cursor: 'pointer',
                }}
              >
                {openIndex === index ? '➖' : '➕'}
              </span>
              <span style={{
                fontWeight: 500,
                color: '#0F2137',
                fontSize: 18,
                fontFamily: 'DM Sans',
              }}>
                {item.question}
              </span>
            </div>

            {openIndex === index && (
              <p style={{
                paddingLeft: 30,
                marginTop: 10,
                color: '#343D48',
                lineHeight: 1.6,
                fontSize: 15,
                textAlign: 'left',
                fontFamily: 'DM Sans'
              }}>
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
