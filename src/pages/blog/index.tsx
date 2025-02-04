import { FC, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Arial", sans-serif;
  background-color: #081b29; // Fondo oscuro
  color: #e0e0e0; // Texto claro para el fondo oscuro
  border-radius: 8px;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #fff; // Título en blanco para destacar
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #b0c4de; // Un color suave pero visible para los subtítulos
  margin-top: 20px;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #dcdcdc; // Texto claro
  line-height: 1.6;
`;

const CodeBlock = styled.pre`
  background-color: #1e2a33; // Fondo oscuro para el bloque de código
  border-radius: 8px;
  padding: 20px;
  font-family: "Courier New", monospace;
  color: #f0f0f0; // Texto claro dentro del bloque de código
  overflow-x: auto;
`;

const InlineCode = styled.code`
  background-color: #333f4b; // Fondo oscuro para código en línea
  padding: 2px 4px;
  border-radius: 4px;
  font-size: 1.1rem;
  color: #f0f0f0; // Texto claro
`;

const Conclusion = styled.div`
  background-color: #0a2733; // Un color ligeramente diferente para la conclusión
  border-radius: 8px;
  padding: 20px;
  margin-top: 40px;
`;

const ConclusionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #b0c4de; // Un color suave pero visible para los subtítulos
  margin-bottom: 10px;
`;

const ConclusionParagraph = styled.p`
  font-size: 1rem;
  color: #dcdcdc; // Texto claro
  line-height: 1.6;
`;

const Blog: FC = () => {
  const [content] = useState<string>(`
    En React, la optimización del rendimiento es clave en aplicaciones grandes. Dos hooks fundamentales para evitar renders innecesarios son \`useMemo\` y \`useCallback\`. Aquí veremos qué son y cómo utilizarlos de manera eficiente.

    ## 📌 ¿Qué es \`useMemo\`?

    \`useMemo\` memoriza el resultado de una función costosa y solo la vuelve a ejecutar si sus dependencias cambian. Esto ayuda a evitar cálculos innecesarios.

    ### 🛠 Ejemplo de \`useMemo\`
    \`\`\`tsx
    import { useMemo, useState } from "react";

    const ExpensiveCalculation = ({ num }: { num: number }) => {
      const result = useMemo(() => {
        console.log("Calculando...");
        return num * 2;
      }, [num]); // Se recalcula solo si 'num' cambia

      return <p>Resultado: {result}</p>;
    };

    export default function App() {
      const [count, setCount] = useState(0);
      const [value, setValue] = useState(5);

      return (
        <div>
          <button onClick={() => setCount(count + 1)}>Re-render</button>
          <button onClick={() => setValue(value + 1)}>Cambiar valor</button>
          <ExpensiveCalculation num={value} />
        </div>
      );
    }
    \`\`\`

    ## 📌 ¿Qué es \`useCallback\`?

    \`useCallback\` es similar a \`useMemo\`, pero se utiliza para memorizar funciones en lugar de valores. Esto evita que se creen nuevas instancias de funciones en cada renderizado.

    ### 🛠 Ejemplo de \`useCallback\`
    \`\`\`tsx
    import { useState, useCallback } from "react";

    const Button = ({ onClick }: { onClick: () => void }) => {
      console.log("Renderizando botón");
      return <button onClick={onClick}>Haz clic</button>;
    };

    export default function App() {
      const [count, setCount] = useState(0);

      const memoizedCallback = useCallback(() => {
        setCount(prevCount => prevCount + 1);
      }, []); // La función se memoriza y no se vuelve a crear a menos que cambien las dependencias

      return <Button onClick={memoizedCallback} />;
    }
    \`\`\`

     ## 📝 Conclusión

    Ambos hooks, \`useMemo\` y \`useCallback\`, son herramientas poderosas para optimizar el rendimiento de las aplicaciones React, evitando cálculos o renders innecesarios. El uso adecuado de estos hooks puede mejorar significativamente la eficiencia de tu aplicación, especialmente cuando trabajas con componentes costosos o funciones que se pasan como props.
  `);

  return (
    <Container>
      <Title>Uso de `useMemo` y `useCallback` en React</Title>
      <Paragraph>
        En React, la optimización del rendimiento es clave en aplicaciones
        grandes. Dos hooks fundamentales para evitar renders innecesarios son{" "}
        <InlineCode>useMemo</InlineCode> y <InlineCode>useCallback</InlineCode>.
        Aquí veremos qué son y cómo utilizarlos de manera eficiente.
      </Paragraph>

      <SectionTitle>
        📌 ¿Qué es <InlineCode>useMemo</InlineCode>?
      </SectionTitle>
      <Paragraph>
        <InlineCode>useMemo</InlineCode> memoriza el resultado de una función
        costosa y solo la vuelve a ejecutar si sus dependencias cambian. Esto
        ayuda a evitar cálculos innecesarios.
      </Paragraph>

      <SectionTitle>
        🛠 Ejemplo de <InlineCode>useMemo</InlineCode>
      </SectionTitle>
      <CodeBlock>
        {`import { useMemo, useState } from "react";

const ExpensiveCalculation = ({ num }: { num: number }) => {
  const result = useMemo(() => {
    console.log("Calculando...");
    return num * 2;
  }, [num]);

  return <p>Resultado: {result}</p>;
};`}
      </CodeBlock>

      <SectionTitle>
        📌 ¿Qué es <InlineCode>useCallback</InlineCode>?
      </SectionTitle>
      <Paragraph>
        <InlineCode>useCallback</InlineCode> es similar a{" "}
        <InlineCode>useMemo</InlineCode>, pero se utiliza para memorizar
        funciones en lugar de valores. Esto evita que se creen nuevas instancias
        de funciones en cada renderizado.
      </Paragraph>

      <SectionTitle>
        🛠 Ejemplo de <InlineCode>useCallback</InlineCode>
      </SectionTitle>
      <CodeBlock>
        {`import { useState, useCallback } from "react";

const Button = ({ onClick }: { onClick: () => void }) => {
  console.log("Renderizando botón");
  return <button onClick={onClick}>Haz clic</button>;
};

export default function App() {
  const [count, setCount] = useState(0);

  const memoizedCallback = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return <Button onClick={memoizedCallback} />;
}`}
      </CodeBlock>
      <Conclusion>
        <ConclusionTitle>📝 Conclusión</ConclusionTitle>
        <ConclusionParagraph>
          Ambos hooks, <InlineCode>useMemo</InlineCode> y{" "}
          <InlineCode>useCallback</InlineCode>, son herramientas poderosas para
          optimizar el rendimiento de las aplicaciones React, evitando cálculos
          o renders innecesarios. El uso adecuado de estos hooks puede mejorar
          significativamente la eficiencia de tu aplicación, especialmente
          cuando trabajas con componentes costosos o funciones que se pasan como
          props.
        </ConclusionParagraph>
      </Conclusion>
    </Container>
  );
};

export default Blog;
