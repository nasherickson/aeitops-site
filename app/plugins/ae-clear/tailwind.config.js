export default function AeClearTest() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-8 bg-gray-300 text-white p-8">
        <h1 className="text-3xl font-bold">AE-Clear Plugin Test</h1>
  
        {/* AE-OUTLINE Debug */}
        <div className="w-64 h-32 ae-outline flex items-center justify-center">
          <p>ae-outline (debug)</p>
        </div>
  
        {/* AE-CLEAR */}
        <div className="w-64 h-32 ae-clear ae-outline flex items-center justify-center bg-black/30">
          <p>ae-clear</p>
        </div>
  
        {/* AE-BLUR */}
        <div className="w-64 h-32 ae-blur ae-outline flex items-center justify-center">
          <p>ae-blur</p>
        </div>
      </div>
    );
  }