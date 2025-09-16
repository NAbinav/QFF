import React from "react";
import { Dialog, DialogTrigger, DialogContent } from "./Dialogue";

const DayTwo = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <a className="more text-base translate-y-6">View Day 2 Schedule</a>
      </DialogTrigger>
      <DialogContent className="dialogue text-base max-w-2xl max-h-[80vh] overflow-y-auto p-6">
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center pb-4" style={{borderBottom: '1px solid rgba(0,0,0,0.1)'}}>
            <h2 className="text-2xl font-bold mb-1">DAY 2</h2>
            {/* <p className="opacity-70">Fall Fest 2025</p> */}
          </div>

          {/* Morning Lectures */}
          <div className="p-5 rounded-lg" style={{
            backgroundColor: 'rgba(0,0,0,0.03)', 
            borderLeft: '4px solid white'
          }}>
            <h3 className="font-semibold text-lg mb-4">Morning Lecture Sessions</h3>
            <div className="flex items-start space-x-4 mb-4">
              <div className="text-xs px-3 py-2 rounded font-medium min-w-[110px] text-center" 
                   style={{backgroundColor: 'rgba(0,0,0,0.1)'}}>
                9:00 AM - 12:00 PM
              </div>
              <div className="flex-1">
                <p className="font-medium mb-2">Team Lecture Sessions (3 Sessions)</p>
                <div className="space-y-1 text-sm opacity-80">
                  <p>• Quantum Machine Learning (QML)</p>
                  <p>• Quantum Cryptography</p>
                  <p>• Quantum Algorithm/Hardware</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lunch Break */}
          <div className="p-5 rounded-lg" style={{
            backgroundColor: 'rgba(0,0,0,0.02)', 
            borderLeft: '4px solid white'
          }}>
            <div className="flex items-center space-x-4">
              <div className="text-xs px-3 py-2 rounded font-medium min-w-[110px] text-center"
                   style={{backgroundColor: 'rgba(0,0,0,0.08)'}}>
                12:00 - 1:00 PM
              </div>
              <div className="flex-1">
                <p className="font-medium mb-1">Lunch Session</p>
                <p className="text-sm opacity-80">Networking & Refreshments</p>
              </div>
            </div>
          </div>

          {/* Afternoon Challenge */}
          <div className="p-5 rounded-lg" style={{
            backgroundColor: 'rgba(0,0,0,0.03)', 
            borderLeft: '4px solid white'
          }}>
            <h3 className="font-semibold text-lg mb-4">Afternoon Challenge</h3>
            <div className="flex items-start space-x-4">
              <div className="text-xs px-3 py-2 rounded font-medium min-w-[110px] text-center"
                   style={{backgroundColor: 'rgba(0,0,0,0.1)'}}>
                2:00 - 4:00 PM
              </div>
              <div className="flex-1">
                <p className="font-medium mb-1">Gamified Notebook Challenge 2</p>
                <p className="text-sm opacity-80 mb-3">4 Medium-level Notebooks</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 rounded" style={{backgroundColor: 'rgba(0,0,0,0.06)'}}>
                    Points System
                  </span>
                  <span className="text-xs px-2 py-1 rounded" style={{backgroundColor: 'rgba(0,0,0,0.06)'}}>
                    Canvas Integration
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Hackathon */}
          <div className="p-5 rounded-lg" style={{
            backgroundColor: 'rgba(0,0,0,0.04)', 
            borderLeft: '4px solid white'
          }}>
            <h3 className="font-semibold text-lg mb-4">Overnight Hackathon</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="text-xs px-3 py-2 rounded font-medium min-w-[110px] text-center"
                     style={{backgroundColor: 'rgba(0,0,0,0.1)'}}>
                  6:00 PM - 8:00 AM+1
                </div>
                <div className="flex-1">
                  <p className="font-medium mb-1">Qiskit Fall Fest 2025 Hackathon</p>
                  <p className="text-sm opacity-80 mb-2">Registration: ₹50/head</p>
                  <div className="space-y-1 text-sm opacity-80">
                    <p>• 3 Tracks with 9 problem statements + Open Innovation</p>
                    <p>• PPT/docs presentation to judges</p>
                  </div>
                </div>
              </div>

              <div className="ml-[126px] space-y-3 text-sm">
                <div className="flex items-center space-x-3">
                  <span className="text-xs px-2 py-1 rounded font-medium" 
                        style={{backgroundColor: 'rgba(0,0,0,0.08)'}}>
                    7:00 PM - 7:00 AM
                  </span>
                  <span className="opacity-80">Build Session</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-xs px-2 py-1 rounded font-medium" 
                        style={{backgroundColor: 'rgba(0,0,0,0.08)'}}>
                    7:00 AM - 8:00 AM
                  </span>
                  <span className="opacity-80">Jury Session & Evaluation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="p-4 rounded-lg" style={{backgroundColor: 'rgba(0,0,0,0.02)'}}>
            <h4 className="font-medium mb-2">💡 Additional Information</h4>
            <div className="text-sm opacity-80 space-y-1">
              <p>• Points-based evaluation system throughout the day</p>
              <p>• Canvas platform integration for tracking progress</p>
              <p>• Overnight accommodation arrangements for hackathon participants</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DayTwo;