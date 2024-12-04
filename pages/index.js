// pages/index.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [activeInfo, setActiveInfo] = useState(null);

  const toggleInfo = (id) => {
    setActiveInfo(activeInfo === id ? null : id);
  };

  return (
    <>
      <Head>
        <title>Serviços Google Cloud</title>
      </Head>
      <div className={`${styles.container} d-flex flex-column align-items-center`}>
        <h1 className="text-white mb-4">Serviços Google Cloud</h1>
        <div className="row w-100 justify-content-center">
          {/* Card 1 */}
          <div className="col-md-4 mb-4">
            <div className={`card ${styles.cardCustom}`} onClick={() => toggleInfo('gcs-info')}>
              <div className="card-body">
                <h5 className="card-title">Google Cloud Storage</h5>
                <p className="card-text">Armazenamento seguro e escalável.</p>
              </div>
            </div>
            {activeInfo === 'gcs-info' && (
              <div className={`${styles.infoBox} bg-white p-3`}>
                <p><strong>Google Cloud Storage:</strong> Serviço de armazenamento de objetos.</p>
                <ul>
                  <li>Armazenar dados de forma segura</li>
                  <li>Gerenciar controle de acesso e versões</li>
                  <li>Ideal para backups e arquivos grandes</li>
                </ul>
              </div>
            )}
          </div>

          {/* Card 2 */}
          <div className="col-md-4 mb-4">
            <div className={`card ${styles.cardCustom}`} onClick={() => toggleInfo('vpc-info')}>
              <div className="card-body">
                <h5 className="card-title">VPC Network</h5>
                <p className="card-text">Rede virtual privada segura.</p>
              </div>
            </div>
            {activeInfo === 'vpc-info' && (
              <div className={`${styles.infoBox} bg-white p-3`}>
                <p><strong>VPC Network:</strong> Rede Virtual Privada no Google Cloud.</p>
                <ul>
                  <li>Criação de sub-redes privadas e públicas</li>
                  <li>Definir políticas de firewall</li>
                  <li>Gerenciar o tráfego entre redes internas e externas</li>
                </ul>
              </div>
            )}
          </div>

          {/* Card 3 */}
          <div className="col-md-4 mb-4">
            <div className={`card ${styles.cardCustom}`} onClick={() => toggleInfo('sql-info')}>
              <div className="card-body">
                <h5 className="card-title">SQL Instances</h5>
                <p className="card-text">Banco de dados MySQL gerenciado.</p>
              </div>
            </div>
            {activeInfo === 'sql-info' && (
              <div className={`${styles.infoBox} bg-white p-3`}>
                <p><strong>SQL Instances:</strong> Banco de dados SQL gerenciado.</p>
                <ul>
                  <li>Criação e gerenciamento de instâncias</li>
                  <li>Backup e recuperação automáticos</li>
                  <li>Escalabilidade e segurança integradas</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
