import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Marcos!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Antônio Evaldo sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Atualmente sou estudante de Front-end em busca da primeira oportunidade, podemos conversar?
            </p>
            <p className={styles.paragrafo}>
                Minha história com programação começou quando ainda estava em busca de me encontrar profissionalmente, eu fazia ciências contábeis na UFRN, mas não sentia que estava no curso certo.
            </p>
            <p className={styles.paragrafo}>
                Então, recebi algumas dicas de alguns amigos sobre a área e comecei a estudar, fazendo pequenos templates, no início achei que jamais conseguiria fazer uma página como essa, que essa área não era pra mim, mas aqui estou eu.
            </p>
            <p className={styles.paragrafo}>
                Após muitos estudos consegui compreender algumas tecnologias, como Javascrip, React, Next e entre outras.
            </p>
            <p className={styles.paragrafo}>
                E hoje estou em busca da minha primeira oportunidade oficial para entrar na área, é isso!

            </p>
        </PostModelo>
    )}