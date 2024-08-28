import * as React from "react";


function LoginWithPasby({
  background,
  logoBgk,
  logoTextColor,
  textColor,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  background?: string,
  logoBgk?: string,
  logoTextColor?: string,
  textColor?: string,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={252}
      height={56}
      fill="none"
      {...props}
    >
      <rect width={252} height={56} fill={background ?? "#DD3E3E"} rx={8} />
      <path
        fill={logoBgk ?? "#fff"}
        d="M35.818 42.907a13.71 13.71 0 0 1-6.125-10.203l-.636-6.935a13.7 13.7 0 0 1 4.175-11.15l5.022-4.804a13.76 13.76 0 0 1 11.344-3.692l6.904.927a13.744 13.744 0 0 1 9.955 6.544l3.59 5.978a13.69 13.69 0 0 1 1.084 11.847l-2.437 6.513a13.73 13.73 0 0 1-8.614 8.24l-6.614 2.152a13.767 13.767 0 0 1-11.82-1.586l-5.828-3.83Z"
      />
      <path
        fill={logoTextColor ?? "#DD3E3E"}
        d="M43.9 18.756c.54 0 1.028.128 1.467.385.446.25.794.606 1.046 1.068.252.455.378.987.378 1.597 0 .609-.126 1.145-.378 1.607-.252.455-.6.811-1.046 1.068-.439.25-.928.375-1.467.375-.68 0-1.747.55-1.747 1.23v.057c0 .42-.341.76-.762.76h-.08a.84.84 0 0 1-.84-.839v-6.419c0-.442.36-.801.803-.801h.625c.098 0 .178.08.178.178 0 .168.228.256.364.156.382-.282.868-.422 1.46-.422Zm-.291 4.69c.431 0 .784-.147 1.057-.44.28-.301.42-.701.42-1.2 0-.5-.14-.896-.42-1.19-.273-.3-.626-.451-1.057-.451-.431 0-.787.15-1.068.451-.273.294-.41.69-.41 1.19 0 .499.137.899.41 1.2.28.293.637.44 1.068.44ZM52.964 18.844a.84.84 0 0 1 .841.84v4.282c0 .443-.36.802-.803.802h-.625a.179.179 0 0 1-.179-.179c0-.168-.227-.256-.363-.155-.38.281-.863.422-1.449.422a2.994 2.994 0 0 1-1.488-.375 2.665 2.665 0 0 1-1.035-1.068c-.252-.462-.378-.998-.378-1.607 0-.61.126-1.146.378-1.608a2.666 2.666 0 0 1 1.035-1.068c.446-.25.942-.374 1.488-.374.56 0 1.026.135 1.4.407.129.093.337.01.337-.148 0-.095.077-.171.171-.171h.67Zm-2.286 4.602a1.4 1.4 0 0 0 1.056-.44c.28-.301.421-.701.421-1.2 0-.5-.14-.896-.42-1.19a1.383 1.383 0 0 0-1.057-.451c-.432 0-.788.15-1.068.451-.28.294-.42.69-.42 1.19 0 .499.14.899.42 1.2.28.293.636.44 1.068.44ZM57.315 24.856c-.482 0-.953-.06-1.413-.177a5 5 0 0 1-.595-.198c-.305-.126-.405-.483-.27-.783.172-.375.642-.512 1.032-.372a3.984 3.984 0 0 0 1.311.23c.711 0 1.067-.18 1.067-.54 0-.168-.097-.29-.29-.363-.195-.073-.493-.135-.896-.187a8.486 8.486 0 0 1-1.176-.253 1.855 1.855 0 0 1-.808-.507c-.223-.242-.335-.587-.335-1.035 0-.374.105-.704.313-.99.216-.294.525-.522.927-.683.41-.162.892-.242 1.446-.242.41 0 .816.047 1.218.143.168.036.323.078.466.126.326.11.44.483.297.795-.166.362-.609.495-.99.379a3.377 3.377 0 0 0-.991-.144c-.36 0-.63.051-.81.154-.179.103-.269.235-.269.396 0 .184.097.312.291.386.194.073.504.143.928.209.474.08.863.169 1.165.264.302.088.564.254.787.496.223.242.334.58.334 1.013 0 .367-.108.694-.323.98-.216.286-.532.51-.95.671-.41.155-.898.232-1.466.232ZM56.644 34.716a3.816 3.816 0 0 1 .08.072 1.287 1.287 0 0 1 .364.902v.04c-.002.102-.01.198-.034.297l-.004.02a1.276 1.276 0 0 1-.246.51l-.013.017a1.27 1.27 0 0 1-.816.44c-.161.014-.323.011-.481-.027l-.021-.005a1.222 1.222 0 0 1-.751-.54 1.422 1.422 0 0 1-.177-1.024l.018-.066.006-.022c.1-.337.33-.613.63-.782a1.288 1.288 0 0 1 1.445.168Zm-1.684.612c-.019.014-.034.035-.032.058a.08.08 0 0 0 .048.067.131.131 0 0 0 .052.006h.041l.037-.002h.037l.064-.002c.015 0 .026.011.026.026l-.001.243v.125l-.001.121v.111l-.001.037a.127.127 0 0 0 .01.04c.01.024.035.043.061.041a.085.085 0 0 0 .057-.027c.015-.02.018-.045.018-.07v-.162l-.001-.121a50.43 50.43 0 0 1-.001-.341c0-.013.01-.023.023-.023l.104.003.037.001h.035l.032.001c.03-.003.03-.003.053-.03a.255.255 0 0 0 .011-.016c.015-.025.005-.06-.016-.08a.123.123 0 0 0-.084-.027h-.138a12.76 12.76 0 0 0-.2 0 8.278 8.278 0 0 0-.127 0h-.068c-.015 0-.03 0-.045.005a.103.103 0 0 0-.031.016Zm.885-.004a.098.098 0 0 0-.04.068c-.003.023-.002.047-.003.072v.621a.204.204 0 0 0 .013.065.089.089 0 0 0 .027.036c.02.015.046.013.067.001a.084.084 0 0 0 .043-.062.432.432 0 0 0 .004-.058v-.03l.001-.034v-.034l.002-.108.002-.074.002-.094a.03.03 0 0 1 .053-.018l.015.02c.032.041.064.084.095.127.01.014.02.03.035.04.022.013.052.008.076-.003a.122.122 0 0 0 .04-.038l.022-.028.025-.032.03-.038.058-.076.019-.024c.004-.006.013-.002.013.005l.003.209v.078l.002.112v.035a49.031 49.031 0 0 1 .001.042.112.112 0 0 0 .01.053c.012.024.036.044.063.042a.087.087 0 0 0 .056-.027c.015-.02.017-.045.018-.07v-.291a31.282 31.282 0 0 1 0-.243v-.161a.223.223 0 0 0-.005-.035c-.006-.029-.027-.054-.056-.058a.083.083 0 0 0-.049.01.127.127 0 0 0-.04.035l-.02.026-.105.136-.006.008a.145.145 0 0 1-.23.005l-.019-.023a6.52 6.52 0 0 1-.132-.167c-.025-.024-.061-.039-.09-.02ZM43.9 29.491c.54 0 1.028.129 1.467.386.446.25.794.605 1.046 1.068.252.455.378.987.378 1.596 0 .61-.126 1.146-.378 1.608-.252.455-.6.811-1.046 1.068-.439.25-.928.375-1.467.375-.59 0-1.077-.141-1.46-.423-.135-.1-.362-.012-.362.156 0 .099-.08.178-.18.178h-.624a.803.803 0 0 1-.803-.801v-6.53a.84.84 0 0 1 .84-.839h.05c.437 0 .792.354.792.791v.137c0 .68 1.066 1.23 1.747 1.23Zm-.291 4.691c.431 0 .784-.147 1.057-.44.28-.301.42-.701.42-1.2 0-.5-.14-.896-.42-1.19-.273-.3-.626-.451-1.057-.451-.431 0-.787.15-1.068.451-.273.294-.41.69-.41 1.19 0 .499.137.899.41 1.2.28.293.637.44 1.068.44ZM52.92 29.58a.84.84 0 0 1 .842.839v4.094c0 1.086-.27 1.893-.809 2.422-.539.529-1.323.793-2.35.793-.547 0-1.065-.07-1.554-.21a3.912 3.912 0 0 1-.743-.295c-.291-.154-.362-.52-.205-.81.206-.378.716-.472 1.117-.313a3.358 3.358 0 0 0 1.244.24c.56 0 .97-.132 1.23-.396.258-.264.388-.668.388-1.211 0-.073-.09-.11-.145-.063-.183.155-.39.279-.621.371a2.54 2.54 0 0 1-.95.176c-.761 0-1.365-.22-1.811-.66-.446-.448-.669-1.116-.669-2.005V30.42a.84.84 0 0 1 1.683 0v1.88c0 .962.392 1.443 1.175 1.443.403 0 .727-.132.971-.397.244-.271.367-.671.367-1.2V30.42a.84.84 0 0 1 .84-.84Z"
      />
      <path
        fill={textColor ?? "#fff"}
        d="M86.977 24.2a1 1 0 0 1 1-1h.772a1 1 0 0 1 1 1v5.602a1 1 0 0 0 1 1h2.676a1 1 0 0 1 1 1V32a1 1 0 0 1-1 1h-5.448a1 1 0 0 1-1-1v-7.8ZM99.176 33.126c-.812 0-1.544-.168-2.198-.504a3.854 3.854 0 0 1-1.54-1.4c-.364-.597-.546-1.274-.546-2.03 0-.747.182-1.419.546-2.016a3.777 3.777 0 0 1 1.526-1.386c.654-.336 1.39-.504 2.212-.504.822 0 1.559.168 2.212.504a3.663 3.663 0 0 1 1.526 1.386c.364.588.546 1.26.546 2.016s-.182 1.433-.546 2.03a3.757 3.757 0 0 1-1.526 1.4c-.653.336-1.39.504-2.212.504Zm0-2.114c.467 0 .849-.159 1.148-.476.299-.327.448-.774.448-1.344 0-.56-.149-.998-.448-1.316-.299-.317-.681-.476-1.148-.476-.466 0-.85.159-1.148.476-.299.317-.448.756-.448 1.316 0 .57.15 1.017.448 1.344.299.317.681.476 1.148.476ZM111.854 25.412a1 1 0 0 1 1 1v5.202c0 1.41-.382 2.464-1.148 3.164-.765.71-1.866 1.064-3.304 1.064a8.416 8.416 0 0 1-2.1-.252 5.721 5.721 0 0 1-.913-.315c-.454-.203-.583-.755-.354-1.196.293-.563 1.049-.721 1.653-.529.025.009.051.016.076.024.476.15.943.224 1.4.224.7 0 1.214-.154 1.54-.462.327-.308.49-.765.49-1.372 0-.086-.11-.129-.173-.07-.504.476-1.198.714-2.081.714-.672 0-1.292-.15-1.862-.448a3.534 3.534 0 0 1-1.358-1.288c-.336-.56-.504-1.204-.504-1.932 0-.719.168-1.353.504-1.904.336-.56.789-.99 1.358-1.288a3.853 3.853 0 0 1 1.862-.462c.784 0 1.416.183 1.896.55.174.133.484.02.484-.198 0-.125.101-.226.226-.226h1.308Zm-3.284 5.082c.476 0 .868-.145 1.176-.434.318-.29.476-.662.476-1.12 0-.457-.154-.826-.462-1.106-.308-.29-.704-.434-1.19-.434-.485 0-.886.145-1.204.434-.308.28-.462.649-.462 1.106 0 .457.159.83.476 1.12.318.29.714.434 1.19.434ZM118.638 26.412a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1V32a1 1 0 0 1-1 1h-.66a1 1 0 0 1-1-1v-5.588Zm1.33-1.84c-.486 0-.878-.135-1.176-.406a1.304 1.304 0 0 1-.448-1.008c0-.401.149-.737.448-1.008.298-.27.69-.406 1.176-.406.485 0 .877.13 1.176.392.298.252.448.579.448.98 0 .42-.15.77-.448 1.05-.299.27-.691.406-1.176.406ZM127.968 25.286c.943 0 1.699.28 2.268.84.579.56.868 1.405.868 2.534V32a1 1 0 0 1-1 1h-.66a1 1 0 0 1-1-1v-2.906c0-1.036-.415-1.554-1.246-1.554-.457 0-.826.15-1.106.448-.27.299-.406.747-.406 1.344V32a1 1 0 0 1-1 1h-.66a1 1 0 0 1-1-1v-5.588a1 1 0 0 1 1-1h1.296c.132 0 .238.107.238.238 0 .214.272.33.449.21a3.518 3.518 0 0 1 1.959-.574ZM148.225 25.412a1 1 0 0 1 1 1v3.186c0 1.13-.327 2.002-.98 2.618-.644.607-1.554.91-2.73.91-.609 0-1.137-.098-1.583-.295-.556-.245-1.285-.24-1.842.005-.44.193-.965.29-1.573.29-1.186 0-2.1-.303-2.744-.91-.635-.616-.952-1.489-.952-2.618v-3.186a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1v3.004c0 .532.088.924.266 1.176.177.243.452.364.826.364.373 0 .653-.126.84-.378.186-.252.28-.64.28-1.162v-3.004a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1v3.004c0 .523.093.91.28 1.162.186.252.466.378.84.378.373 0 .648-.121.826-.364.177-.252.266-.644.266-1.176v-3.004a1 1 0 0 1 1-1h.66ZM150.89 26.412a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1V32a1 1 0 0 1-1 1h-.66a1 1 0 0 1-1-1v-5.588Zm1.33-1.84c-.486 0-.878-.135-1.176-.406a1.304 1.304 0 0 1-.448-1.008c0-.401.149-.737.448-1.008.298-.27.69-.406 1.176-.406.485 0 .877.13 1.176.392.298.252.448.579.448.98 0 .42-.15.77-.448 1.05-.299.27-.691.406-1.176.406ZM159.913 31.98c.147.417-.017.887-.442 1.001a4.454 4.454 0 0 1-1.155.145c-.989 0-1.75-.242-2.282-.728-.522-.485-.784-1.209-.784-2.17v-5.51a1 1 0 0 1 1-1h.673c.545 0 .987.442.987.987v.126c0 .476.386.861.861.861a.86.86 0 0 1 .861.861v.266a.86.86 0 0 1-.861.861.861.861 0 0 0-.861.861v1.66c0 .28.07.494.21.643.14.15.332.224.574.224.435 0 .954.163 1.099.572l.12.34ZM166.127 25.286c.942 0 1.698.28 2.268.84.578.56.868 1.405.868 2.534V32a1 1 0 0 1-1 1h-.66a1 1 0 0 1-1-1v-2.906c0-1.036-.416-1.554-1.246-1.554-.458 0-.826.15-1.106.448-.271.299-.406.747-.406 1.344V32a1 1 0 0 1-1 1h-.66a1 1 0 0 1-1-1v-8.388a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1v1.298c0 .457.592.74 1.022.586.392-.14.812-.21 1.26-.21ZM179.781 25.286c.69 0 1.316.163 1.876.49a3.403 3.403 0 0 1 1.344 1.372c.336.588.504 1.274.504 2.058 0 .784-.168 1.475-.504 2.072a3.522 3.522 0 0 1-1.344 1.372 3.739 3.739 0 0 1-1.876.476c-.851 0-2.114.675-2.114 1.526v.08a.984.984 0 0 1-.984.984h-.676a1 1 0 0 1-1-1v-8.304a1 1 0 0 1 1-1h1.332c.111 0 .202.09.202.202 0 .189.252.288.405.178.467-.337 1.079-.506 1.835-.506Zm-.56 5.726c.466 0 .849-.159 1.148-.476.298-.327.448-.77.448-1.33s-.15-.998-.448-1.316c-.299-.326-.682-.49-1.148-.49-.467 0-.85.164-1.148.49-.299.317-.448.756-.448 1.316s.149 1.003.448 1.33c.298.317.681.476 1.148.476ZM191.763 25.412a1 1 0 0 1 1 1V32a1 1 0 0 1-1 1h-1.332a.202.202 0 0 1-.202-.202c0-.188-.252-.288-.405-.178-.467.338-1.079.506-1.835.506-.69 0-1.32-.158-1.89-.476a3.621 3.621 0 0 1-1.344-1.386c-.326-.597-.49-1.288-.49-2.072s.164-1.47.49-2.058a3.52 3.52 0 0 1 1.344-1.372 3.82 3.82 0 0 1 1.89-.476c.704 0 1.29.161 1.757.484.141.097.357.004.357-.167 0-.105.086-.19.191-.19h1.469Zm-3.214 5.6c.467 0 .85-.159 1.148-.476.299-.327.448-.774.448-1.344 0-.56-.149-.998-.448-1.316-.298-.317-.681-.476-1.148-.476-.466 0-.849.159-1.148.476-.298.317-.448.756-.448 1.316 0 .57.15 1.017.448 1.344.299.317.682.476 1.148.476ZM197.234 33.126c-.635 0-1.26-.07-1.876-.21a6.913 6.913 0 0 1-.716-.212c-.46-.165-.623-.694-.427-1.141.241-.55.92-.758 1.492-.58a5.702 5.702 0 0 0 1.611.24c.429 0 .732-.043.91-.127.186-.093.28-.224.28-.392s-.112-.285-.336-.35c-.215-.075-.56-.145-1.036-.21a10.494 10.494 0 0 1-1.554-.294 2.39 2.39 0 0 1-1.092-.672c-.308-.326-.462-.784-.462-1.372 0-.485.144-.915.434-1.288.289-.383.709-.681 1.26-.896.56-.224 1.227-.336 2.002-.336.55 0 1.096.056 1.638.168.188.04.366.084.533.134.486.147.668.696.463 1.16-.234.53-.874.733-1.434.582a4.542 4.542 0 0 0-1.186-.154c-.42 0-.728.052-.924.154-.196.094-.294.22-.294.378 0 .178.107.304.322.378.214.066.569.136 1.064.21.625.094 1.143.2 1.554.322.41.122.765.346 1.064.672.308.318.462.765.462 1.344 0 .476-.145.905-.434 1.288-.29.373-.719.668-1.288.882-.56.215-1.237.322-2.03.322ZM206.906 25.286c.69 0 1.316.159 1.876.476a3.403 3.403 0 0 1 1.344 1.372c.336.588.504 1.274.504 2.058 0 .784-.168 1.475-.504 2.072a3.497 3.497 0 0 1-1.344 1.386 3.739 3.739 0 0 1-1.876.476c-.756 0-1.368-.168-1.835-.506-.153-.11-.405-.01-.405.178a.202.202 0 0 1-.202.202h-1.332a1 1 0 0 1-1-1v-8.388a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1v.14c0 .849 1.265 1.534 2.114 1.534Zm-.56 5.726c.466 0 .849-.159 1.148-.476.298-.327.448-.774.448-1.344 0-.56-.15-.998-.448-1.316-.299-.317-.682-.476-1.148-.476-.467 0-.85.159-1.148.476-.299.317-.448.756-.448 1.316 0 .57.149 1.017.448 1.344.298.317.681.476 1.148.476ZM218.846 25.412a1 1 0 0 1 1 1v5.202c0 1.41-.378 2.464-1.134 3.164-.746.71-1.824 1.064-3.234 1.064a8.187 8.187 0 0 1-2.072-.252 5.524 5.524 0 0 1-.887-.314c-.446-.204-.57-.75-.344-1.186.294-.566 1.058-.72 1.665-.525l.028.01c.458.148.91.223 1.358.223.672 0 1.167-.154 1.484-.462.318-.308.476-.765.476-1.372 0-.063-.076-.096-.125-.055-.547.466-1.214.7-2.003.7-.98 0-1.764-.29-2.352-.869-.578-.578-.868-1.446-.868-2.604v-2.724a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1v2.29c0 .579.108.999.322 1.26.215.262.528.392.938.392.42 0 .761-.15 1.022-.448.271-.298.406-.746.406-1.344v-2.15a1 1 0 0 1 1-1h.66Z"
      />
    </svg>
  );
}

function IdentifyWithPasby({
  background,
  logoBgk,
  logoTextColor,
  textColor,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  background?: string,
  logoBgk?: string,
  logoTextColor?: string,
  textColor?: string,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={252}
      height={56}
      fill="none"
      {...props}
    >
      <rect width={252} height={56} fill={background ?? "#DD3E3E"} rx={8} />
      <path
        fill={logoBgk ?? "#fff"}
        d="M35.818 42.907a13.71 13.71 0 0 1-6.125-10.203l-.636-6.935a13.7 13.7 0 0 1 4.175-11.15l5.022-4.804a13.76 13.76 0 0 1 11.344-3.692l6.904.927a13.744 13.744 0 0 1 9.956 6.544l3.588 5.978a13.69 13.69 0 0 1 1.085 11.847l-2.437 6.513a13.73 13.73 0 0 1-8.614 8.24l-6.614 2.152a13.767 13.767 0 0 1-11.82-1.586z"
      />
      <path
        fill={logoTextColor ?? "#DD3E3E"}
        d="M43.9 18.756c.54 0 1.028.128 1.467.385.446.25.794.606 1.046 1.068.252.455.378.987.378 1.597s-.126 1.145-.378 1.607c-.252.455-.6.811-1.046 1.068-.439.25-.928.375-1.467.375-.68 0-1.747.55-1.747 1.23v.057c0 .42-.341.76-.762.76h-.08a.84.84 0 0 1-.84-.839v-6.419c0-.442.36-.801.803-.801h.625c.098 0 .179.08.179.178 0 .168.227.256.363.156.382-.282.868-.422 1.46-.422zm-.291 4.69c.431 0 .784-.147 1.057-.44.28-.301.42-.701.42-1.2 0-.5-.14-.896-.42-1.19-.273-.3-.626-.451-1.057-.451s-.787.15-1.068.451c-.273.294-.41.69-.41 1.19 0 .499.137.899.41 1.2.28.293.637.44 1.068.44zM52.964 18.844a.84.84 0 0 1 .841.84v4.282c0 .443-.36.802-.803.802h-.625a.179.179 0 0 1-.179-.179c0-.168-.227-.256-.363-.155-.38.281-.863.422-1.449.422a2.994 2.994 0 0 1-1.488-.375 2.665 2.665 0 0 1-1.035-1.068c-.252-.462-.378-.998-.378-1.607s.126-1.146.378-1.608a2.666 2.666 0 0 1 1.035-1.068c.446-.25.942-.375 1.488-.375.56 0 1.026.136 1.4.408.129.093.337.01.337-.148 0-.095.077-.171.171-.171zm-2.286 4.602a1.4 1.4 0 0 0 1.057-.44c.28-.301.42-.701.42-1.2 0-.5-.14-.896-.42-1.19a1.383 1.383 0 0 0-1.057-.451c-.432 0-.788.15-1.068.451-.28.294-.42.69-.42 1.19 0 .499.14.899.42 1.2.28.293.636.44 1.068.44zM57.315 24.856c-.482 0-.953-.06-1.413-.177a5 5 0 0 1-.595-.198c-.305-.126-.405-.483-.27-.783.172-.375.643-.512 1.032-.372a3.984 3.984 0 0 0 1.311.23c.711 0 1.067-.18 1.067-.54 0-.168-.097-.29-.29-.363s-.493-.135-.896-.187a8.486 8.486 0 0 1-1.176-.253 1.855 1.855 0 0 1-.808-.506c-.223-.243-.335-.588-.335-1.036 0-.374.104-.704.313-.99.216-.294.525-.522.927-.683.41-.162.892-.242 1.446-.242.41 0 .816.047 1.218.143.168.036.323.078.466.126.326.11.44.483.297.795-.166.362-.609.496-.99.379a3.377 3.377 0 0 0-.991-.144c-.36 0-.63.051-.81.154-.179.103-.269.235-.269.396 0 .184.097.312.291.386.194.073.504.143.928.209.474.08.863.169 1.165.264.302.088.564.254.787.496.223.242.334.58.334 1.013 0 .367-.108.694-.323.98-.216.286-.532.51-.95.671-.41.155-.898.232-1.466.232zM56.644 34.716a3.816 3.816 0 0 1 .08.072 1.287 1.287 0 0 1 .364.902v.04c-.002.102-.01.198-.033.297l-.005.02a1.276 1.276 0 0 1-.246.51l-.012.017a1.27 1.27 0 0 1-.817.44c-.161.014-.323.011-.481-.027l-.021-.005a1.222 1.222 0 0 1-.751-.54 1.422 1.422 0 0 1-.177-1.024l.018-.066.007-.022c.099-.337.329-.613.63-.782a1.288 1.288 0 0 1 1.444.168zm-1.684.612c-.019.014-.034.035-.032.058a.08.08 0 0 0 .048.067.131.131 0 0 0 .052.006h.041l.037-.002h.037l.064-.002c.015 0 .026.011.026.026l-.001.243v.125l-.001.121v.111l-.001.037a.127.127 0 0 0 .01.04c.01.024.035.043.061.041a.085.085 0 0 0 .057-.027c.015-.02.018-.045.018-.07v-.163l-.001-.12v-.123l-.001-.218c0-.013.01-.023.023-.023l.104.003.037.001h.035l.032.001c.03-.003.03-.003.052-.03a.255.255 0 0 0 .012-.016c.015-.025.005-.06-.016-.08a.123.123 0 0 0-.084-.027h-.138a12.76 12.76 0 0 0-.2 0 8.278 8.278 0 0 0-.127 0h-.068c-.015 0-.03 0-.045.005a.103.103 0 0 0-.031.016zm.885-.004a.098.098 0 0 0-.04.068c-.003.023-.002.047-.003.072v.621a.204.204 0 0 0 .013.065.089.089 0 0 0 .027.036c.02.015.046.013.067.001a.084.084 0 0 0 .043-.062.432.432 0 0 0 .004-.058v-.03l.001-.034v-.034l.002-.108.002-.074.001-.094a.03.03 0 0 1 .054-.018l.015.02c.032.041.064.084.095.127.01.014.02.03.035.04.022.013.052.008.076-.003a.122.122 0 0 0 .04-.038l.022-.028.025-.032.03-.038.058-.076.019-.024c.004-.006.013-.002.013.005l.003.209v.078l.002.112v.035a49.031 49.031 0 0 1 .001.042.112.112 0 0 0 .01.053c.012.024.036.044.063.042a.087.087 0 0 0 .056-.027c.015-.02.017-.045.018-.07v-.291a31.282 31.282 0 0 1 0-.243v-.161a.223.223 0 0 0-.005-.035c-.006-.029-.027-.054-.056-.058a.083.083 0 0 0-.049.01.127.127 0 0 0-.04.035l-.02.026-.105.136-.006.008a.145.145 0 0 1-.23.005 6.74 6.74 0 0 1-.151-.19c-.025-.024-.061-.039-.09-.02zM43.9 29.491c.54 0 1.028.129 1.467.386.446.25.794.605 1.046 1.068.252.455.378.987.378 1.597s-.126 1.145-.378 1.607c-.252.455-.6.811-1.046 1.068-.439.25-.928.375-1.467.375-.59 0-1.077-.141-1.46-.423-.135-.1-.362-.012-.362.156 0 .099-.08.178-.18.178h-.624a.803.803 0 0 1-.803-.801v-6.53a.84.84 0 0 1 .84-.839h.05c.437 0 .792.354.792.791v.137c0 .68 1.066 1.23 1.747 1.23zm-.291 4.691c.431 0 .784-.147 1.057-.44.28-.301.42-.701.42-1.2s-.14-.896-.42-1.19c-.273-.3-.626-.451-1.057-.451s-.787.15-1.068.451c-.273.294-.41.69-.41 1.19s.137.899.41 1.2c.28.293.637.44 1.068.44zM52.92 29.58a.84.84 0 0 1 .842.839v4.093c0 1.087-.27 1.894-.809 2.423-.539.528-1.323.793-2.35.793-.547 0-1.065-.07-1.554-.21a3.912 3.912 0 0 1-.743-.295c-.291-.154-.362-.52-.205-.81.206-.378.716-.472 1.117-.313a3.358 3.358 0 0 0 1.244.24c.56 0 .97-.132 1.23-.396.258-.264.388-.668.388-1.211 0-.073-.09-.11-.145-.063-.183.155-.39.279-.621.371a2.54 2.54 0 0 1-.95.176c-.761 0-1.365-.22-1.811-.66-.446-.448-.669-1.116-.669-2.004v-2.134a.84.84 0 0 1 1.683 0v1.88c0 .962.392 1.443 1.175 1.443.403 0 .727-.132.971-.397.244-.271.367-.671.367-1.2V30.42a.84.84 0 0 1 .84-.84z"
      />
      <g fill={textColor ?? "#fff"}>
        <path d="M89.675 25.342a.791.791 0 0 0-.791.791v3.934c0 .437.354.791.79.791.437 0 .792.354.792.791V32a1 1 0 0 1-1 1h-3.95a1 1 0 0 1-1-1v-.344c0-.44.357-.798.798-.798s.798-.357.798-.798v-3.92c0-.44-.358-.798-.798-.798s-.798-.357-.798-.798V24.2a1 1 0 0 1 1-1h3.95a1 1 0 0 1 1 1v.351a.79.79 0 0 1-.791.791zM98.902 22.612a1 1 0 0 1 1 1V32a1 1 0 0 1-1 1H97.57a.202.202 0 0 1-.202-.202c0-.188-.252-.288-.404-.177-.466.337-1.073.505-1.822.505-.69 0-1.32-.158-1.89-.476a3.59 3.59 0 0 1-1.358-1.386c-.327-.597-.49-1.288-.49-2.072s.163-1.47.49-2.058a3.491 3.491 0 0 1 1.358-1.372c.57-.317 1.2-.476 1.89-.476.83 0 2.1-.693 2.1-1.523v-.166c0-.544.44-.985.985-.985zm-3.2 8.4a1.49 1.49 0 0 0 1.134-.476c.299-.326.448-.774.448-1.344 0-.56-.15-.998-.448-1.316-.29-.317-.667-.476-1.134-.476-.467 0-.85.159-1.148.476-.299.318-.448.756-.448 1.316 0 .57.15 1.018.448 1.344.299.318.681.476 1.148.476zM105.673 31.096c.364 0 .677-.051.938-.154.499-.189 1.101-.2 1.469.186l.1.105c.356.374.375.976-.059 1.255-.661.426-1.504.638-2.532.638-.886 0-1.666-.168-2.338-.504s-1.194-.802-1.568-1.4c-.364-.597-.546-1.274-.546-2.03 0-.746.182-1.414.546-2.002a3.804 3.804 0 0 1 1.498-1.4c.644-.336 1.363-.504 2.156-.504.738 0 1.41.154 2.016.462a3.487 3.487 0 0 1 1.47 1.33c.233.37.392.787.476 1.25.085.472-.271.887-.742.977l-3.333.638c-.644.123-.94.864-.313 1.053.223.067.477.1.762.1zm-.322-3.92c-.457 0-.83.145-1.12.434l-.027.027c-.46.471.172 1.067.818.94l.874-.17c.497-.097.805-.643.393-.937a1.518 1.518 0 0 0-.938-.294zM115.538 25.286c.942 0 1.698.28 2.268.84.578.56.868 1.405.868 2.534V32a1 1 0 0 1-1 1h-.66a1 1 0 0 1-1-1v-2.906c0-1.036-.416-1.554-1.246-1.554-.458 0-.826.15-1.106.448-.271.299-.406.747-.406 1.344V32a1 1 0 0 1-1 1h-.66a1 1 0 0 1-1-1v-5.588a1 1 0 0 1 1-1h1.296c.131 0 .238.107.238.238 0 .214.272.33.448.21.189-.13.394-.236.616-.322.41-.168.858-.252 1.344-.252zM124.978 31.98c.147.416-.016.887-.442 1.001a4.457 4.457 0 0 1-1.154.145c-.99 0-1.75-.243-2.282-.728-.523-.485-.784-1.209-.784-2.17v-5.51a1 1 0 0 1 1-1h.673c.545 0 .987.442.987.987v.126a.86.86 0 0 0 .861.861c.475 0 .861.386.861.861v.266a.861.861 0 0 1-.861.861.86.86 0 0 0-.861.861v1.66c0 .28.07.494.21.643.14.15.331.224.574.224.434 0 .953.163 1.098.572zM126.25 26.412a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1V32a1 1 0 0 1-1 1h-.66a1 1 0 0 1-1-1zm1.33-1.84c-.485 0-.877-.135-1.176-.406a1.304 1.304 0 0 1-.448-1.008c0-.401.149-.737.448-1.008.299-.27.691-.406 1.176-.406s.877.13 1.176.392c.299.252.448.579.448.98 0 .42-.149.77-.448 1.05-.299.27-.691.406-1.176.406zM133.229 25.524c0 .093.075.168.168.168h.735c.498 0 .903.404.903.903v.217c0 .48-.389.868-.868.868a.868.868 0 0 0-.868.868V32a1 1 0 0 1-1 1h-.66a1 1 0 0 1-1-1v-6.504c0-.924.275-1.657.826-2.198.56-.541 1.339-.812 2.338-.812.336 0 .662.033.98.098l.049.01c.453.1.626.593.473 1.03l-.119.339c-.144.412-.639.567-1.075.567-.28 0-.5.084-.658.252-.15.168-.224.415-.224.742zM142.992 25.412a1 1 0 0 1 1 1v5.202c0 1.41-.378 2.464-1.134 3.164-.747.71-1.825 1.064-3.234 1.064a8.18 8.18 0 0 1-2.072-.252 5.524 5.524 0 0 1-.887-.314c-.447-.204-.57-.75-.344-1.186.294-.566 1.057-.72 1.665-.525a4.353 4.353 0 0 0 1.386.233c.672 0 1.166-.154 1.484-.462.317-.308.476-.765.476-1.372 0-.063-.077-.097-.125-.055-.547.466-1.215.7-2.003.7-.98 0-1.764-.29-2.352-.869-.579-.579-.868-1.447-.868-2.604v-2.724a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1v2.29c0 .579.107.999.322 1.26.214.261.527.392.938.392.42 0 .76-.15 1.022-.448.27-.299.406-.747.406-1.344v-2.15a1 1 0 0 1 1-1zM161.155 25.412a1 1 0 0 1 1 1v3.186c0 1.13-.326 2.002-.98 2.618-.644.607-1.554.91-2.73.91-.609 0-1.136-.098-1.583-.295-.555-.245-1.285-.24-1.841.005-.44.193-.965.29-1.574.29-1.185 0-2.1-.303-2.744-.91-.634-.616-.952-1.488-.952-2.618v-3.186a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1v3.004c0 .532.089.924.266 1.176.178.243.453.364.826.364.374 0 .654-.126.84-.378.187-.252.28-.64.28-1.162v-3.004a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1v3.004c0 .523.094.91.28 1.162.187.252.467.378.84.378.374 0 .649-.121.826-.364.178-.252.266-.644.266-1.176v-3.004a1 1 0 0 1 1-1zM163.82 26.412a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1V32a1 1 0 0 1-1 1h-.66a1 1 0 0 1-1-1zm1.33-1.84c-.485 0-.877-.135-1.176-.406a1.307 1.307 0 0 1-.448-1.008c0-.401.15-.737.448-1.008.299-.27.691-.406 1.176-.406.486 0 .878.13 1.176.392.299.252.448.579.448.98 0 .42-.149.77-.448 1.05-.298.27-.69.406-1.176.406zM172.844 31.98c.147.416-.017.887-.443 1.001a4.45 4.45 0 0 1-1.154.145c-.989 0-1.75-.243-2.282-.728-.523-.485-.784-1.209-.784-2.17v-5.51a1 1 0 0 1 1-1h.673c.545 0 .987.442.987.987v.126c0 .476.386.861.861.861a.86.86 0 0 1 .861.861v.266a.86.86 0 0 1-.861.861.861.861 0 0 0-.861.861v1.66c0 .28.07.494.21.643.14.15.331.224.574.224.434 0 .954.163 1.098.572zM179.057 25.286c.943 0 1.699.28 2.268.84.579.56.868 1.405.868 2.534V32a1 1 0 0 1-1 1h-.66a1 1 0 0 1-1-1v-2.906c0-1.036-.415-1.554-1.246-1.554-.457 0-.826.15-1.106.448-.27.299-.406.747-.406 1.344V32a1 1 0 0 1-1 1h-.66a1 1 0 0 1-1-1v-8.388a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1v1.298c0 .457.593.74 1.022.586.392-.14.812-.21 1.26-.21zM192.712 25.286c.69 0 1.316.163 1.876.49a3.403 3.403 0 0 1 1.344 1.372c.336.588.504 1.274.504 2.058s-.168 1.475-.504 2.072a3.522 3.522 0 0 1-1.344 1.372 3.739 3.739 0 0 1-1.876.476c-.851 0-2.114.675-2.114 1.526v.08a.984.984 0 0 1-.984.984h-.676a1 1 0 0 1-1-1v-8.304a1 1 0 0 1 1-1h1.332c.111 0 .202.09.202.202 0 .189.251.288.404.178.468-.337 1.079-.506 1.836-.506zm-.56 5.726c.466 0 .849-.159 1.148-.476.298-.327.448-.77.448-1.33s-.15-.999-.448-1.316c-.299-.327-.682-.49-1.148-.49-.467 0-.85.164-1.148.49-.299.317-.448.756-.448 1.316s.149 1.003.448 1.33c.298.317.681.476 1.148.476zM204.694 25.412a1 1 0 0 1 1 1V32a1 1 0 0 1-1 1h-1.332a.202.202 0 0 1-.202-.202c0-.188-.252-.288-.405-.178-.467.338-1.079.506-1.835.506a3.813 3.813 0 0 1-1.89-.476 3.621 3.621 0 0 1-1.344-1.386c-.327-.597-.49-1.288-.49-2.072s.163-1.47.49-2.058a3.52 3.52 0 0 1 1.344-1.372 3.814 3.814 0 0 1 1.89-.476c.704 0 1.289.161 1.757.484.141.097.357.004.357-.167a.19.19 0 0 1 .191-.19zm-3.214 5.6c.467 0 .849-.159 1.148-.476.299-.327.448-.775.448-1.344 0-.56-.149-.999-.448-1.316-.299-.317-.681-.476-1.148-.476s-.849.159-1.148.476c-.299.317-.448.756-.448 1.316 0 .57.149 1.017.448 1.344.299.317.681.476 1.148.476zM210.164 33.126c-.634 0-1.26-.07-1.876-.21a6.987 6.987 0 0 1-.716-.212c-.459-.165-.622-.694-.426-1.141.241-.55.919-.758 1.492-.58a5.708 5.708 0 0 0 1.61.24c.43 0 .733-.043.91-.127.187-.093.28-.224.28-.392s-.112-.285-.336-.35c-.214-.075-.56-.145-1.036-.21a10.545 10.545 0 0 1-1.554-.294 2.39 2.39 0 0 1-1.092-.672c-.308-.327-.462-.784-.462-1.372 0-.485.145-.915.434-1.288.29-.383.71-.681 1.26-.896.56-.224 1.228-.336 2.002-.336a8.06 8.06 0 0 1 1.638.168c.189.04.367.084.534.134.486.147.668.696.463 1.16-.235.53-.875.733-1.435.582a4.537 4.537 0 0 0-1.186-.154c-.42 0-.728.051-.924.154-.196.093-.294.22-.294.378 0 .177.108.303.322.378.215.065.57.135 1.064.21.626.093 1.144.2 1.554.322.411.121.766.345 1.064.672.308.317.462.765.462 1.344 0 .476-.144.905-.434 1.288-.289.373-.718.667-1.288.882-.56.215-1.236.322-2.03.322zM219.837 25.286c.69 0 1.316.159 1.876.476a3.403 3.403 0 0 1 1.344 1.372c.336.588.504 1.274.504 2.058s-.168 1.475-.504 2.072a3.497 3.497 0 0 1-1.344 1.386 3.739 3.739 0 0 1-1.876.476c-.757 0-1.368-.168-1.836-.506-.153-.11-.404-.01-.404.178a.202.202 0 0 1-.202.202h-1.332a1 1 0 0 1-1-1v-8.388a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1v.14c0 .849 1.265 1.534 2.114 1.534zm-.56 5.726c.466 0 .849-.159 1.148-.476.298-.327.448-.775.448-1.344 0-.56-.15-.999-.448-1.316-.299-.317-.682-.476-1.148-.476-.467 0-.85.159-1.148.476-.299.317-.448.756-.448 1.316 0 .57.149 1.017.448 1.344.298.317.681.476 1.148.476zM231.777 25.412a1 1 0 0 1 1 1v5.202c0 1.41-.378 2.464-1.134 3.164-.747.71-1.825 1.064-3.234 1.064a8.187 8.187 0 0 1-2.072-.252 5.524 5.524 0 0 1-.887-.314c-.446-.204-.57-.75-.344-1.186.294-.566 1.058-.72 1.665-.525a4.353 4.353 0 0 0 1.386.233c.672 0 1.167-.154 1.484-.462s.476-.765.476-1.372c0-.063-.077-.097-.125-.055-.547.466-1.215.7-2.003.7-.98 0-1.764-.29-2.352-.869-.579-.579-.868-1.447-.868-2.604v-2.724a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1v2.29c0 .579.107.999.322 1.26.215.261.527.392.938.392.42 0 .761-.15 1.022-.448.271-.299.406-.747.406-1.344v-2.15a1 1 0 0 1 1-1z" />
      </g>
    </svg>
  );
}

function LinkWithPasby({
  background,
  logoBgk,
  logoTextColor,
  textColor,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  background?: string,
  logoBgk?: string,
  logoTextColor?: string,
  textColor?: string,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={252}
      height={56}
      fill="none"
      {...props}
    >
      <rect width={252} height={56} fill={background ?? "#DD3E3E"} rx={8} />
      <path
        fill={logoBgk ?? "#fff"}
        d="M35.818 42.907a13.71 13.71 0 0 1-6.125-10.203l-.636-6.935a13.7 13.7 0 0 1 4.175-11.15l5.022-4.804a13.76 13.76 0 0 1 11.344-3.692l6.904.927a13.744 13.744 0 0 1 9.956 6.544l3.588 5.978a13.69 13.69 0 0 1 1.085 11.847l-2.437 6.513a13.73 13.73 0 0 1-8.614 8.24l-6.614 2.152a13.767 13.767 0 0 1-11.82-1.586z"
      />
      <path
        fill={logoTextColor ?? "#DD3E3E"}
        d="M43.9 18.756c.54 0 1.028.128 1.467.385.446.25.794.606 1.046 1.068.252.455.378.987.378 1.597s-.126 1.145-.378 1.607a2.74 2.74 0 0 1-1.046 1.068c-.439.25-.928.375-1.467.375-.68 0-1.747.55-1.747 1.23v.057a.76.76 0 0 1-.762.76h-.08a.84.84 0 0 1-.84-.839v-6.419c0-.442.36-.801.803-.801h.625a.18.18 0 0 1 .179.178c0 .168.227.256.363.156.382-.282.868-.422 1.46-.422zm-.291 4.69c.431 0 .784-.147 1.057-.44.28-.301.42-.701.42-1.2 0-.5-.14-.896-.42-1.19-.273-.3-.626-.451-1.057-.451s-.787.15-1.068.451c-.273.294-.41.69-.41 1.19 0 .499.137.899.41 1.2.28.293.637.44 1.068.44zm9.355-4.602a.84.84 0 0 1 .841.84v4.282c0 .443-.36.802-.803.802h-.625a.179.179 0 0 1-.179-.179c0-.168-.227-.256-.363-.155-.38.281-.863.422-1.449.422a2.994 2.994 0 0 1-1.488-.375 2.665 2.665 0 0 1-1.035-1.068c-.252-.462-.378-.998-.378-1.607s.126-1.146.378-1.608a2.666 2.666 0 0 1 1.035-1.068 2.99 2.99 0 0 1 1.488-.375c.56 0 1.026.136 1.4.408.129.093.337.01.337-.148a.17.17 0 0 1 .171-.171zm-2.286 4.602a1.4 1.4 0 0 0 1.057-.44c.28-.301.42-.701.42-1.2 0-.5-.14-.896-.42-1.19a1.383 1.383 0 0 0-1.057-.451c-.432 0-.788.15-1.068.451-.28.294-.42.69-.42 1.19 0 .499.14.899.42 1.2.28.293.636.44 1.068.44zm6.637 1.41a5.71 5.71 0 0 1-1.413-.177 5 5 0 0 1-.595-.198c-.305-.126-.405-.483-.27-.783.172-.375.643-.512 1.032-.372a3.984 3.984 0 0 0 1.311.23c.711 0 1.067-.18 1.067-.54 0-.168-.097-.29-.29-.363s-.493-.135-.896-.187a8.486 8.486 0 0 1-1.176-.253 1.855 1.855 0 0 1-.808-.506c-.223-.243-.335-.588-.335-1.036 0-.374.104-.704.313-.99.216-.294.525-.522.927-.683.41-.162.892-.242 1.446-.242.41 0 .816.047 1.218.143.168.036.323.078.466.126.326.11.44.483.297.795-.166.362-.609.496-.99.379a3.377 3.377 0 0 0-.991-.144c-.36 0-.63.051-.81.154-.179.103-.269.235-.269.396 0 .184.097.312.291.386.194.073.504.143.928.209.474.08.863.169 1.165.264.302.088.564.254.787.496.223.242.334.58.334 1.013 0 .367-.108.694-.323.98-.216.286-.532.51-.95.671-.41.155-.898.232-1.466.232zm-.671 9.86a3.816 3.816 0 0 1 .08.072 1.287 1.287 0 0 1 .364.902v.04c-.002.102-.01.198-.033.297l-.005.02a1.276 1.276 0 0 1-.246.51l-.012.017a1.27 1.27 0 0 1-.817.44 1.495 1.495 0 0 1-.481-.027l-.021-.005a1.222 1.222 0 0 1-.751-.54 1.422 1.422 0 0 1-.177-1.024l.018-.066.007-.022c.099-.337.329-.613.63-.782a1.288 1.288 0 0 1 1.444.168zm-1.684.612c-.019.014-.034.035-.032.058a.08.08 0 0 0 .048.067.131.131 0 0 0 .052.006h.041l.037-.002h.037l.064-.002c.015 0 .026.011.026.026l-.001.243v.125l-.001.121v.111l-.001.037a.127.127 0 0 0 .01.04c.01.024.035.043.061.041a.085.085 0 0 0 .057-.027.113.113 0 0 0 .018-.07v-.163l-.001-.12v-.123l-.001-.218c0-.013.01-.023.023-.023l.104.003.037.001h.035l.032.001c.03-.003.03-.003.052-.03a.255.255 0 0 0 .012-.016c.015-.025.005-.06-.016-.08a.123.123 0 0 0-.084-.027h-.138a12.76 12.76 0 0 0-.2 0 8.278 8.278 0 0 0-.127 0h-.068c-.015 0-.03 0-.045.005a.103.103 0 0 0-.031.016zm.885-.004a.098.098 0 0 0-.04.068c-.003.023-.002.047-.003.072v.621a.204.204 0 0 0 .013.065.089.089 0 0 0 .027.036c.02.015.046.013.067.001a.084.084 0 0 0 .043-.062.432.432 0 0 0 .004-.058v-.03l.001-.034v-.034l.002-.108.002-.074.001-.094a.03.03 0 0 1 .054-.018l.015.02c.032.041.064.084.095.127.01.014.02.03.035.04.022.013.052.008.076-.003a.122.122 0 0 0 .04-.038l.022-.028.025-.032.03-.038.058-.076.019-.024c.004-.006.013-.002.013.005l.003.209v.078l.002.112v.035a49.031 49.031 0 0 1 .001.042.112.112 0 0 0 .01.053c.012.024.036.044.063.042a.087.087 0 0 0 .056-.027c.015-.02.017-.045.018-.07v-.291a31.282 31.282 0 0 1 0-.243v-.161a.223.223 0 0 0-.005-.035c-.006-.029-.027-.054-.056-.058a.083.083 0 0 0-.049.01.127.127 0 0 0-.04.035l-.02.026-.105.136-.006.008a.145.145 0 0 1-.23.005 6.74 6.74 0 0 1-.151-.19c-.025-.024-.061-.039-.09-.02zM43.9 29.491c.54 0 1.028.129 1.467.386.446.25.794.605 1.046 1.068.252.455.378.987.378 1.597s-.126 1.145-.378 1.607a2.74 2.74 0 0 1-1.046 1.068c-.439.25-.928.375-1.467.375-.59 0-1.077-.141-1.46-.423-.135-.1-.362-.012-.362.156 0 .099-.08.178-.18.178h-.624a.803.803 0 0 1-.803-.801v-6.53a.84.84 0 0 1 .84-.839h.05c.437 0 .792.354.792.791v.137c0 .68 1.066 1.23 1.747 1.23zm-.291 4.691c.431 0 .784-.147 1.057-.44.28-.301.42-.701.42-1.2s-.14-.896-.42-1.19c-.273-.3-.626-.451-1.057-.451s-.787.15-1.068.451c-.273.294-.41.69-.41 1.19s.137.899.41 1.2c.28.293.637.44 1.068.44zm9.311-4.602a.84.84 0 0 1 .842.839v4.093c0 1.087-.27 1.894-.809 2.423-.539.528-1.323.793-2.35.793a5.62 5.62 0 0 1-1.554-.21 3.912 3.912 0 0 1-.743-.295c-.291-.154-.362-.52-.205-.81.206-.378.716-.472 1.117-.313a3.358 3.358 0 0 0 1.244.24c.56 0 .97-.132 1.23-.396.258-.264.388-.668.388-1.211 0-.073-.09-.11-.145-.063a2.23 2.23 0 0 1-.621.371 2.54 2.54 0 0 1-.95.176c-.761 0-1.365-.22-1.811-.66-.446-.448-.669-1.116-.669-2.004v-2.134a.84.84 0 0 1 1.683 0v1.88c0 .962.392 1.443 1.175 1.443.403 0 .727-.132.971-.397.244-.271.367-.671.367-1.2V30.42a.84.84 0 0 1 .84-.84z"
      />
      <g fill={textColor ?? "#fff"}>
        <path d="M84.977 24.2a1 1 0 0 1 1-1h.772a1 1 0 0 1 1 1v5.602a1 1 0 0 0 1 1h2.676a1 1 0 0 1 1 1V32a1 1 0 0 1-1 1h-5.448a1 1 0 0 1-1-1zm8.418 2.212a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1V32a1 1 0 0 1-1 1h-.66a1 1 0 0 1-1-1zm1.33-1.84c-.485 0-.877-.135-1.175-.406a1.305 1.305 0 0 1-.449-1.008c0-.401.15-.737.449-1.008.298-.27.69-.406 1.175-.406s.878.13 1.177.392c.298.252.447.579.447.98 0 .42-.149.77-.448 1.05-.298.27-.69.406-1.175.406zm8.001.714c.943 0 1.699.28 2.268.84.579.56.868 1.405.868 2.534V32a1 1 0 0 1-1 1h-.66a1 1 0 0 1-1-1v-2.906c0-1.036-.415-1.554-1.246-1.554-.457 0-.826.15-1.106.448-.271.299-.406.747-.406 1.344V32a1 1 0 0 1-1 1h-.66a1 1 0 0 1-1-1v-5.588a1 1 0 0 1 1-1h1.296c.132 0 .238.107.238.238 0 .214.272.33.449.21a3.518 3.518 0 0 1 1.959-.574zm8.763 5.695a.728.728 0 0 0-1.297.455V32a1 1 0 0 1-1 1h-.66a1 1 0 0 1-1-1v-8.388a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1v2.076c0 .884 1.064 1.333 1.698.716l.727-.708a1 1 0 0 1 .698-.284h.38c.884 0 1.333 1.062.718 1.696l-.896.925a1 1 0 0 0-.068 1.314l1.601 2.035a1 1 0 0 1-.785 1.618h-.68a1 1 0 0 1-.781-.375zm21.091-5.569a1 1 0 0 1 1 1v3.186c0 1.13-.327 2.002-.98 2.618-.644.607-1.554.91-2.73.91-.609 0-1.136-.098-1.583-.295a2.4 2.4 0 0 0-1.841.005c-.441.193-.965.29-1.574.29-1.185 0-2.1-.303-2.744-.91-.635-.616-.952-1.488-.952-2.618v-3.186a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1v3.004c0 .532.089.924.266 1.176.177.243.453.364.826.364s.653-.126.84-.378.28-.64.28-1.162v-3.004a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1v3.004c0 .523.093.91.28 1.162s.467.378.84.378.649-.121.826-.364c.177-.252.266-.644.266-1.176v-3.004a1 1 0 0 1 1-1zm2.665 1a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1V32a1 1 0 0 1-1 1h-.66a1 1 0 0 1-1-1zm1.33-1.84c-.485 0-.877-.135-1.176-.406a1.304 1.304 0 0 1-.448-1.008c0-.401.149-.737.448-1.008.299-.27.691-.406 1.176-.406s.877.13 1.176.392c.299.252.448.579.448.98 0 .42-.149.77-.448 1.05-.299.27-.691.406-1.176.406zm7.693 7.408c.147.416-.016.887-.442 1.001a4.457 4.457 0 0 1-1.154.145c-.99 0-1.75-.243-2.282-.728-.523-.485-.784-1.209-.784-2.17v-5.51a1 1 0 0 1 1-1h.673c.545 0 .987.442.987.987v.126a.86.86 0 0 0 .861.861c.475 0 .861.386.861.861v.266a.861.861 0 0 1-.861.861.86.86 0 0 0-.861.861v1.66c0 .28.07.494.21.643.14.15.331.224.574.224.434 0 .953.163 1.098.572zm6.214-6.694c.943 0 1.699.28 2.268.84.579.56.868 1.405.868 2.534V32a1 1 0 0 1-1 1h-.66a1 1 0 0 1-1-1v-2.906c0-1.036-.415-1.554-1.246-1.554-.457 0-.826.15-1.106.448-.271.299-.406.747-.406 1.344V32a1 1 0 0 1-1 1h-.66a1 1 0 0 1-1-1v-8.388a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1v1.298c0 .457.592.74 1.022.586.392-.14.812-.21 1.26-.21zm13.654 0a3.65 3.65 0 0 1 1.876.49 3.39 3.39 0 0 1 1.344 1.372c.336.588.504 1.274.504 2.058s-.168 1.475-.504 2.072a3.509 3.509 0 0 1-1.344 1.372 3.736 3.736 0 0 1-1.876.476c-.85 0-2.114.675-2.114 1.526v.08c0 .544-.44.984-.983.984h-.677a1 1 0 0 1-1-1v-8.304a1 1 0 0 1 1-1h1.332c.112 0 .202.09.202.202 0 .189.252.288.405.178.467-.337 1.079-.506 1.835-.506zm-.56 5.726c.467 0 .85-.159 1.148-.476.299-.327.448-.77.448-1.33s-.149-.999-.448-1.316c-.298-.327-.681-.49-1.148-.49-.466 0-.849.164-1.148.49-.298.317-.448.756-.448 1.316s.15 1.003.448 1.33c.299.317.682.476 1.148.476zm12.543-5.6a1 1 0 0 1 1 1V32a1 1 0 0 1-1 1h-1.332a.202.202 0 0 1-.202-.202c0-.188-.252-.288-.405-.178-.467.338-1.079.506-1.835.506a3.813 3.813 0 0 1-1.89-.476 3.621 3.621 0 0 1-1.344-1.386c-.327-.597-.49-1.288-.49-2.072s.163-1.47.49-2.058a3.52 3.52 0 0 1 1.344-1.372 3.814 3.814 0 0 1 1.89-.476c.703 0 1.289.161 1.757.484.141.097.357.004.357-.167a.19.19 0 0 1 .191-.19zm-3.214 5.6c.466 0 .849-.159 1.148-.476.298-.327.448-.775.448-1.344 0-.56-.15-.999-.448-1.316-.299-.317-.682-.476-1.148-.476-.467 0-.85.159-1.148.476-.299.317-.448.756-.448 1.316 0 .57.149 1.017.448 1.344.298.317.681.476 1.148.476zm8.684 2.114c-.635 0-1.26-.07-1.876-.21a6.987 6.987 0 0 1-.716-.212c-.46-.165-.623-.694-.426-1.141.24-.55.919-.758 1.492-.58a5.702 5.702 0 0 0 1.61.24c.429 0 .733-.043.91-.127.187-.093.28-.224.28-.392s-.112-.285-.336-.35c-.215-.075-.56-.145-1.036-.21a10.494 10.494 0 0 1-1.554-.294 2.39 2.39 0 0 1-1.092-.672c-.308-.327-.462-.784-.462-1.372 0-.485.145-.915.434-1.288.289-.383.709-.681 1.26-.896.56-.224 1.227-.336 2.002-.336a8.06 8.06 0 0 1 1.638.168c.189.04.367.084.534.134.485.147.668.696.463 1.16-.235.53-.875.733-1.435.582a4.537 4.537 0 0 0-1.186-.154c-.42 0-.728.051-.924.154-.196.093-.294.22-.294.378 0 .177.107.303.322.378.215.065.569.135 1.064.21.625.093 1.143.2 1.554.322a2.3 2.3 0 0 1 1.064.672c.308.317.462.765.462 1.344 0 .476-.145.905-.434 1.288-.289.373-.719.667-1.288.882-.56.215-1.237.322-2.03.322zm9.672-7.84a3.74 3.74 0 0 1 1.876.476 3.39 3.39 0 0 1 1.344 1.372c.336.588.504 1.274.504 2.058s-.168 1.475-.504 2.072a3.484 3.484 0 0 1-1.344 1.386 3.736 3.736 0 0 1-1.876.476c-.756 0-1.368-.168-1.835-.506-.153-.11-.405-.01-.405.178 0 .112-.09.202-.202.202h-1.332a1 1 0 0 1-1-1v-8.388a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1v.14c0 .849 1.266 1.534 2.114 1.534zm-.56 5.726c.467 0 .85-.159 1.148-.476.299-.327.448-.775.448-1.344 0-.56-.149-.999-.448-1.316-.298-.317-.681-.476-1.148-.476-.466 0-.849.159-1.148.476-.298.317-.448.756-.448 1.316 0 .57.15 1.017.448 1.344.299.317.682.476 1.148.476zm12.501-5.6a1 1 0 0 1 1 1v5.202c0 1.41-.378 2.464-1.134 3.164-.747.71-1.825 1.064-3.234 1.064a8.18 8.18 0 0 1-2.072-.252 5.49 5.49 0 0 1-.887-.314c-.447-.204-.57-.75-.344-1.186.293-.566 1.057-.72 1.664-.525l.029.01c.457.148.91.223 1.358.223.672 0 1.166-.154 1.484-.462.317-.308.476-.765.476-1.372 0-.063-.077-.097-.125-.055-.547.466-1.215.7-2.003.7-.98 0-1.764-.29-2.352-.869-.579-.579-.868-1.447-.868-2.604v-2.724a1 1 0 0 1 1-1h.66a1 1 0 0 1 1 1v2.29c0 .579.107.999.322 1.26.214.261.527.392.938.392.42 0 .76-.15 1.022-.448.27-.299.406-.747.406-1.344v-2.15a1 1 0 0 1 1-1z" />
      </g>
    </svg>
  );
}

const DefaultButton = {
  login: LoginWithPasby,
  identify: IdentifyWithPasby,
  link: LinkWithPasby,
};

export type ButtonType = 'login' | 'identify' | 'link';

interface ButtonProps extends React.ComponentPropsWithoutRef<'svg'> {
  type: ButtonType;
  background?: string;
  logoBgk?: string;
  logoTextColor?: string;
  textColor?: string;
}

const Button: React.FC<ButtonProps> = ({ type, ...props }) => {
  const Component = DefaultButton[type];
  return <Component {...props} />;
};

export default Button;