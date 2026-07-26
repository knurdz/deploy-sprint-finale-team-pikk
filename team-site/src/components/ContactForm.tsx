// AI-REVIEW-MARKER: participant must manually remove this marker
import { useState } from 'react';
import { Send } from 'lucide-react';

export function ContactForm() {
  const [status, setStatus] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const turnstileToken = formData.get('cf-turnstile-response');
    if (!turnstileToken) {
      setStatus('Please complete the security check.');
      return;
    }

    try {
      setStatus('Verifying security check...');
      const verifyRes = await fetch('/api/verify-turnstile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: turnstileToken }),
      });
      const verifyData = await verifyRes.json();
      
      if (!verifyData.success) {
        setStatus('Security check failed. Please try again.');
        return;
      }

      // Add the Web3Forms access key
      // accessKeyStoredInSecret
      // provider web3forms contact configured
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      formData.append('access_key', accessKey);

      setStatus('Sending message...');
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setStatus('Message sent successfully!');
        form.reset();
      } else {
        setStatus(`Failed to send. ${data.message}`);
      }
    } catch (error) {
      setStatus('Error sending message. Please try again later.');
    }
  };

  return (
    <div className="panel" id="contact">
      <div className="panelHeader">
        <div>
          <p className="eyebrow">Support</p>
          <h2>Contact Us</h2>
        </div>
      </div>
      
      <form 
        onSubmit={handleSubmit} 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '12px', 
          padding: '20px' 
        }}
      >
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          required 
          style={{ padding: '10px', borderRadius: '6px', border: '1px solid #cfdac4', background: '#f7f3eb' }} 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          required 
          style={{ padding: '10px', borderRadius: '6px', border: '1px solid #cfdac4', background: '#f7f3eb' }} 
        />
        <textarea 
          name="message" 
          placeholder="How can we help?" 
          required 
          rows={4} 
          style={{ padding: '10px', borderRadius: '6px', border: '1px solid #cfdac4', background: '#f7f3eb', resize: 'vertical' }} 
        />
        
        <div className="cf-turnstile" data-sitekey="0x4AAAAAAAplaceholder-replace-me"></div>
        
        <button 
          type="submit" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '8px', 
            padding: '12px', 
            background: '#4c7bd9', 
            color: 'white', 
            border: 'none', 
            borderRadius: '6px', 
            cursor: 'pointer',
            fontWeight: 600
          }}
        >
          <Send size={18} />
          Send Message
        </button>
        
        {status && (
          <p style={{ 
            fontSize: '14px', 
            marginTop: '8px', 
            color: status.includes('success') ? '#4c7bd9' : '#e11d48' 
          }}>
            {status}
          </p>
        )}
      </form>
    </div>
  );
}
