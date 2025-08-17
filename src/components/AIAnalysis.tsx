import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, Zap, Star, CheckCircle, Clock, BookOpen, Shield, 
  Download, Printer, Scale, Gavel, FileText, Target, TrendingUp 
} from 'lucide-react';

interface AIAnalysisProps {
  analysis: string | null;
  isLoading: boolean;
  t: Record<string, string>;
  userRole?: 'lawyer' | 'common' | null;
}

const GlossaryTooltip: React.FC<{ children: React.ReactNode; article: { title: string; description: string } }> = ({ children, article }) => {
  return (
    <span className="relative group cursor-help focus-within:outline-none">
      <span tabIndex={0} className="underline decoration-dotted decoration-blue-500 underline-offset-2 focus:outline-none transition-all duration-200 hover:decoration-blue-700">{children}</span>
      <motion.span 
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        whileHover={{ opacity: 1, scale: 1, y: 0 }}
        whileFocus={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-3 z-50 min-w-[280px] max-w-sm bg-gradient-to-br from-white to-blue-50 border border-blue-200 shadow-2xl rounded-2xl p-4 text-sm text-gray-900 font-normal whitespace-normal backdrop-blur-sm"
      >
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-blue-200 transform rotate-45"></div>
        <span className="font-bold text-blue-700 text-base">{article.title}</span><br/>
        <span className="text-gray-700 mt-1 block">{article.description}</span>
      </motion.span>
    </span>
  );
};

export const AIAnalysis: React.FC<AIAnalysisProps> = ({ analysis, isLoading, t, userRole }) => {
  const printRef = useRef<HTMLDivElement>(null);

  // Split the analysis into sections for better formatting (aligned to new structured output)
  let classification = '', laws = '', detailedAnalysis = '', procedural = '', precedents = '', actionPlan = '', constitutional = '', teachersNote = '';
  if (analysis) {
    const classMatch = analysis.match(/### Case Classification[\s\S]*?(?=###|$)/);
    classification = classMatch ? classMatch[0].replace('### Case Classification', '').trim() : '';
    const lawsMatch = analysis.match(/### Relevant IPC Sections[\s\S]*?(?=###|$)/);
    laws = lawsMatch ? lawsMatch[0].replace('### Relevant IPC Sections', '').trim() : '';
    const detMatch = analysis.match(/### Detailed Legal Analysis[\s\S]*?(?=###|$)/);
    detailedAnalysis = detMatch ? detMatch[0].replace('### Detailed Legal Analysis', '').trim() : '';
    const procMatch = analysis.match(/### Procedural Aspects[\s\S]*?(?=###|$)/);
    procedural = procMatch ? procMatch[0].replace('### Procedural Aspects', '').trim() : '';
    const precMatch = analysis.match(/### Legal Precedents[\s\S]*?(?=###|$)/);
    precedents = precMatch ? precMatch[0].replace('### Legal Precedents', '').trim() : '';
    const planMatch = analysis.match(/### Professional Action Plan[\s\S]*?(?=###|$)/);
    actionPlan = planMatch ? planMatch[0].replace('### Professional Action Plan', '').trim() : '';
    const constMatch = analysis.match(/### Constitutional Implications[\s\S]*?(?=###|$)/);
    constitutional = constMatch ? constMatch[0].replace('### Constitutional Implications', '').trim() : '';
    const teachersNoteMatch = analysis.match(/\*\*Teacher['s]s Note:\*\*[\s\S]*/);
    teachersNote = teachersNoteMatch ? teachersNoteMatch[0].replace('**Teacher\'s Note:**', '').replace('**Teacher\'s Note:**', '').trim() : '';
  }

  const handlePrint = () => {
    if (printRef.current) {
      window.print();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 40, scale: 0.98 }}
      transition={{ duration: 0.8, type: 'spring', stiffness: 100, damping: 20 }}
      className="w-full h-full bg-gradient-to-br from-white/95 via-blue-50/95 to-amber-50/95 rounded-3xl shadow-2xl relative border border-white/50 backdrop-blur-sm overflow-y-auto"
    >
      {/* Download/Print Button */}
      {(!isLoading) && (
        <motion.button
          initial={{ opacity: 0, x: 40, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6, type: 'spring', stiffness: 200 }}
          onClick={handlePrint}
          className="absolute top-6 right-6 z-20 bg-gradient-to-r from-blue-600 to-amber-600 text-white font-bold px-6 py-3 rounded-2xl shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 print:hidden border border-white/20 flex items-center gap-2"
          aria-label="Download or Print Analysis"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            🖨️
          </motion.div>
          <span>Download as PDF / Print</span>
        </motion.button>
      )}
      
      <div ref={printRef} className="print:bg-white print:text-black print:shadow-none print:p-0 w-full h-full">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center gap-8 py-24 relative w-full h-full"
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center z-0"
              initial={{ opacity: 0.5, scale: 0.8 }}
              animate={{ opacity: [0.5, 0.8, 0.5], scale: [0.8, 1.1, 0.8] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              style={{ filter: 'blur(80px)' }}
            >
              <div className="w-96 h-96 rounded-full bg-gradient-to-br from-blue-300 via-slate-300 to-amber-300 opacity-40" />
            </motion.div>
            
            {/* Centered icon stack */}
            <div className="relative flex items-center justify-center w-48 h-48 z-20">
              {/* Rotating scale icon behind main icon */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute w-32 h-32 text-blue-400/30"
              >
                <Scale className="w-full h-full" />
              </motion.div>
              
              {/* Main pulsing icon */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
                className="relative z-10"
              >
                <motion.div
                  className="w-24 h-24 bg-gradient-to-br from-blue-500 to-amber-500 rounded-full flex items-center justify-center shadow-2xl"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(59, 130, 246, 0.5)",
                      "0 0 40px rgba(245, 158, 11, 0.5)",
                      "0 0 20px rgba(59, 130, 246, 0.5)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Scale className="w-12 h-12 text-white" />
                </motion.div>
              </motion.div>
              
              {/* Orbiting particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-amber-400 rounded-full"
                  style={{
                    left: "50%",
                    top: "50%",
                    marginLeft: "-4px",
                    marginTop: "-4px",
                  }}
                  animate={{
                    x: [0, 60 * Math.cos((i * 45 * Math.PI) / 180)],
                    y: [0, 60 * Math.sin((i * 45 * Math.PI) / 180)],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            {/* Loading text */}
            <motion.div
              className="text-center z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.h2
                className="text-3xl font-bold mb-4 bg-gradient-to-r from-slate-700 via-blue-700 to-amber-600 bg-clip-text text-transparent"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Analyzing Your Case
              </motion.h2>
              <motion.p className="text-lg text-slate-600 mb-6">
                Our AI is carefully examining every detail...
              </motion.p>
              
              {/* Progress indicators */}
              <div className="flex justify-center gap-2 mb-4">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 bg-gradient-to-r from-blue-500 to-amber-500 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
              
              {/* Progress bar */}
              <motion.div
                className="w-64 h-2 bg-slate-200 rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 via-slate-500 to-amber-500 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 3, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        ) : analysis ? (
          <motion.div
            className="p-8 space-y-8 w-full h-full overflow-y-auto"
          >
            {/* Case Classification */}
            {classification && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.6, type: 'spring', stiffness: 200 }}
                className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-xl p-8 border border-white/50 backdrop-blur-sm"
              >
                <motion.div 
                  className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-slate-800 via-blue-800 to-amber-700 bg-clip-text mb-4 flex items-center gap-3"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Shield className="h-8 w-8 text-blue-700" />
                  </motion.div>
                  Case Classification
                </motion.div>
                <motion.div 
                  className="text-lg text-gray-800 whitespace-pre-line print:text-black leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {classification}
                </motion.div>
              </motion.div>
            )}

            {/* Relevant IPC Sections */}
            {laws && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6, type: 'spring', stiffness: 200 }}
                className="bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-xl p-8 border border-white/50 backdrop-blur-sm"
              >
                <motion.div 
                  className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-slate-800 via-blue-800 to-amber-700 bg-clip-text mb-4 flex items-center gap-3"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    <BookOpen className="h-8 w-8 text-slate-700" />
                  </motion.div>
                  Relevant IPC Sections
                </motion.div>
                <motion.div 
                  className="text-lg text-gray-800 whitespace-pre-line print:text-black leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {laws.split('\n').map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-2 mb-2"
                    >
                      <motion.div
                        className="w-2 h-2 bg-slate-600 rounded-full mt-3 flex-shrink-0"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      />
                      <span>{line}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}

            {/* Detailed Legal Analysis */}
            {detailedAnalysis && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6, type: 'spring', stiffness: 200 }}
                className="bg-gradient-to-br from-white to-amber-50 rounded-3xl shadow-xl p-8 border border-white/50 backdrop-blur-sm"
              >
                <motion.div 
                  className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-slate-800 via-blue-800 to-amber-700 bg-clip-text mb-4 flex items-center gap-3"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.div
                    animate={{ 
                      y: [0, -5, 0],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Scale className="h-8 w-8 text-amber-700" />
                  </motion.div>
                  Detailed Legal Analysis
                </motion.div>
                <motion.div 
                  className="text-lg text-gray-800 whitespace-pre-line print:text-black leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {detailedAnalysis}
                </motion.div>
              </motion.div>
            )}

            {/* Procedural Aspects */}
            {procedural && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6, type: 'spring', stiffness: 200 }}
                className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-xl p-8 border border-white/50 backdrop-blur-sm"
              >
                <motion.div 
                  className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-slate-800 via-blue-800 to-amber-700 bg-clip-text mb-4 flex items-center gap-3"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  >
                    <Clock className="h-8 w-8 text-blue-700" />
                  </motion.div>
                  Procedural Aspects
                </motion.div>
                <motion.div 
                  className="text-lg text-gray-800 whitespace-pre-line print:text-black leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {procedural}
                </motion.div>
              </motion.div>
            )}

            {/* Legal Precedents - Only for Common Person */}
            {precedents && userRole === 'common' && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6, type: 'spring', stiffness: 200 }}
                className="bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-xl p-8 border border-white/50 backdrop-blur-sm"
              >
                <motion.div 
                  className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-slate-800 via-blue-800 to-amber-700 bg-clip-text mb-4 flex items-center gap-3"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Star className="h-8 w-8 text-slate-700" />
                  </motion.div>
                  Legal Precedents
                </motion.div>
                <motion.div 
                  className="text-lg text-gray-800 whitespace-pre-line print:text-black leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  {precedents}
                </motion.div>
              </motion.div>
            )}

            {/* Professional Action Plan */}
            {actionPlan && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.6, type: 'spring', stiffness: 200 }}
                className="bg-gradient-to-br from-white to-amber-50 rounded-3xl shadow-xl p-8 border border-white/50 backdrop-blur-sm"
              >
                <motion.div 
                  className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-slate-800 via-blue-800 to-amber-700 bg-clip-text mb-4 flex items-center gap-3"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <CheckCircle className="h-8 w-8 text-amber-700" />
                  </motion.div>
                  Professional Action Plan
                </motion.div>
                <motion.div 
                  className="text-lg text-gray-800 whitespace-pre-line print:text-black leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  {actionPlan}
                </motion.div>
              </motion.div>
            )}

            {/* Constitutional Implications */}
            {constitutional && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.6, type: 'spring', stiffness: 200 }}
                className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-xl p-8 border border-white/50 backdrop-blur-sm"
              >
                <motion.div 
                  className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-slate-800 via-blue-800 to-amber-700 bg-clip-text mb-4 flex items-center gap-3"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Shield className="h-8 w-8 text-blue-700" />
                  </motion.div>
                  Constitutional Implications
                </motion.div>
                <motion.div 
                  className="text-lg text-gray-800 whitespace-pre-line print:text-black leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  {constitutional}
                </motion.div>
              </motion.div>
            )}

            {/* Teacher's Note */}
            {teachersNote && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6, type: 'spring', stiffness: 200 }}
                className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-400 rounded-3xl p-6 mt-6 text-amber-900 font-medium print:bg-white print:border-none print:text-black shadow-lg backdrop-blur-sm"
              >
                <motion.div className="flex items-center gap-3 mb-3">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="h-6 w-6 text-amber-600" />
                  </motion.div>
                  <span className="font-bold text-lg">Teacher's Note:</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  {teachersNote}
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 text-gray-400 italic text-xl w-full h-full flex items-center justify-center"
          >
            {t.noAnalysis}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};