// src/pages/Home.tsx

import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to Killian's Club! </p>
      <p>My name is Killian Dempsey and this is my personal website to learn new technologies, from theory to deployment. About me:</p>
      <ul>
        <li><b>Data Scientist</b> with a background in <b>Full Stack Engineering</b></li>
        <li>1 year in industry as a Data Scientist</li>
        <li><b>BSc</b> in Computer Science & <b>MSc</b> in Advanced Computing specialising in AI/ML</li>
      </ul>
      <p>I have experience in all types of AI: from PyTorch to Clustering to RAG. Some of my major porjects ahve been predicitigng stock and crypto prices using LSTM and fuzzy clustering Single Cell RNA-Seq data.</p>
      <p>This website follows a microservices architecture, with hosting in AWS. The domain was purchasd via GoDaddy, then the NameServers were configured to point towards a DNS server- Route53. The frontend is Typescript React, which is deployed using a CDN - CloudFront. A VPC is setup in AWS to host backend services. In the other tabs you will see other backend services which are all containerised via Docker and distributed using Kubernetes EKS.</p>
    </div>
  );
};

export default Home;
